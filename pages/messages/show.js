import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader, BarLoader } from 'react-spinners';
import firebase from 'firebase';
import web3 from '../../ethereum/web3';
import TimeCapsule from '../../ethereum/TimeCapsule';
import SendEtherForm from "../../components/SendEtherForm";



var config = {
    apiKey: "AIzaSyBC5188TstyDNnw0AdbCTYqyp7YyAx0DQ0",
    authDomain: "timecapsule-3b1bd.firebaseapp.com",
    databaseURL: "https://timecapsule-3b1bd.firebaseio.com",
    projectId: "timecapsule-3b1bd",
    storageBucket: "timecapsule-3b1bd.appspot.com",
    messagingSenderId: "221653140896"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

class MessagesShow extends Component {

    state={
        place:'',
        loading: true,
        ido:'',
        keido:'',
        usernameArray:'',
        messagesArray:'',
        _isMounted: false,
        messagesDataNewState:'',
        sendStatus:'',
        sendEther:'',
        modalOpen: false,
        whileLoading: false,
        errorModal: false,
        sendErrorMesssage:'',
        sendAddress:''

    }

    sendEther = async () => {

        this.setState({ whileLoading: true});

        try {

            const accounts = await web3.eth.getAccounts();

            await web3.eth.sendTransaction({
                to:this.state.sendAddress, //そのメッセージを残した相手に変更予定
                from: accounts[0],
                value:web3.utils.toWei("0.0001", "ether")
            });

            this.setState({modalOpen: true, whileLoading: false});
        } catch(err){
            this.setState({sendErrorMesssage:"送金中にエラーが発生しました。再度お試しください。",
                           errorModal:true
            })
        }
    };


    getMessagesArray() {


        var messages = [];

        var message='';

        var messagePlace = '';

        var messageAuthor = '';

        var messageAddress = '';

        var messageId ='';

        const here = this.state.place;


        firebase.database().ref("/messages")

    .on('value', snapshot => {
            snapshot.forEach(function (childSnapshot) {

                const messagesData = childSnapshot.val();


                message = messagesData['message'];

                messagePlace = messagesData['place'];

                messageAuthor = messagesData['postUsername'];

                messageAddress = messagesData['postUserAddress'];

               messageId = messagesData['messageId'];

                //******本来は" 東京都新宿区"ではなくhere

                if( " 東京都新宿区" === messagePlace) {

                    messages.push({ message:message, place: messagePlace, author: messageAuthor, address:messageAddress, messageId: messageId});

                }


            })
            this.setState({messagesArray:messages});

        }).bind(this);


    }

    //*****  本来はcomponentWillMountはない　loading時間が長いので開発用にコメントアウトしてcomponentWillMountであらかじめ定義する

    componentWillMount(){
        this.setState({place:" 東京都新宿区"})
        this.getMessagesArray()
    }

    //***** 開発モードのためコメントアウト


    // componentDidMount() {
    //
    //     var hereThis= this;
    //
    //
    //     var here = '';
    //     if( navigator.geolocation )
    //     {
    //         // alert( "あなたの端末では、現在位置を取得することができます。" ) ;
    //         // console.log("あなたの端末では、現在位置を取得することができます");
    //
    //         // 現在地を取得
    //         navigator.geolocation.getCurrentPosition(
    //             // [第1引数] 取得に成功した場合の関数
    //             function (position) {
    //                 // 取得したデータの整理
    //                 var data = position.coords;
    //
    //                 // データの整理
    //                 var ido = data.latitude;
    //                 var keido = data.longitude;
    //                 var alt = data.altitude;
    //                 var accLatlng = data.accuracy;
    //                 var accAlt = data.altitudeAccuracy;
    //                 var heading = data.heading;			//0=北,90=東,180=南,270=西
    //                 var speed = data.speed;
    //
    //                 hereThis.setState({ido: ido, keido:keido})
    //
    //                 // アラート表示
    //                 // alert("あなたの現在位置は、\n[" + ido + "," + keido + "]\nです。");
    //
    //                 var apiKey = 'AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0';
    //
    //                 var requestURL = 'https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false';
    //
    //                 requestURL += '&latlng=' + ido + ',' + keido;
    //                 requestURL += '&key=' + apiKey;
    //
    //
    //                 fetch(requestURL)
    //                     .then(response => response.json())
    //                     .then(json => {
    //                         here = json.results[0].formatted_address;
    //                         const herePlaceNames = here.match("(.{2,3}[都道府県].{1,3}[区市町])");
    //                         const herePlaceName = herePlaceNames[0];
    //                         hereThis.setState({place: herePlaceName});
    //                         hereThis.setState({loading: false});
    //                     }).then(()=>{
    //                         hereThis.getMessagesArray();
    //                 }).then(() => {
    //                     hereThis.setMessagesDataNewState();
    //                 });
    //
    //             },
    //
    //             // [第2引数] 取得に失敗した場合の関数
    //             function (error) {
    //                 // エラーコード(error.code)の番号
    //                 // 0:UNKNOWN_ERROR				原因不明のエラー
    //                 // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
    //                 // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
    //                 // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…
    //
    //                 // エラー番号に対応したメッセージ
    //                 var errorInfo = [
    //                     "原因不明のエラーが発生しました…。",
    //                     "位置情報の取得が許可されませんでした…。",
    //                     "電波状況などで位置情報が取得できませんでした…。",
    //                     "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
    //                 ];
    //
    //                 // エラー番号
    //                 var errorNo = error.code;
    //
    //                 // エラーメッセージ
    //                 var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[errorNo];
    //
    //                 // アラート表示
    //                 alert(errorMessage);
    //
    //             },
    //
    //             // [第3引数] オプション
    //             {
    //                 "enableHighAccuracy": false,
    //                 "timeout": 8000,
    //                 "maximumAge": 2000,
    //             }
    //         );
    //
    //     }
    //
    //     else {
    //         alert("あなたの端末では、現在位置を取得できません。");
    //         console.log("あなたの端末では、現在位置を取得できません");
    //
    //     }
    // }



    render(){

        const messagesDataNew = [];


        const messagesData = this.state.messagesArray;

            for (var i = 0; i < messagesData.length; i++) {


                messagesDataNew.push(
                    <Card>
                        <Card.Content>
                            {/*<Image floated='right' size='mini' src='/images/avatar/large/steve.jpg'/>*/}
                            <Card.Meta> {messagesData[i]["author"]}</Card.Meta>
                            <Card.Description>
                                {messagesData[i]["message"]}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Modal trigger={
                                    <Button basic color='red'>
                                        トランザクションIDを確認する
                                    </Button>

                                }>
                                    <Modal.Header>このメッセージのトランザクションID</Modal.Header>
                                    <Modal.Content image>
                                        <Image wrapped size='medium' src='/images/avatar/large/rachel.png'/>
                                        <Modal.Description>
                                            <Header>0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22</Header>
                                            <p>We've found the following gravatar image associated with your e-mail
                                                address.</p>
                                            <p>Is it okay to use this photo?</p>
                                        </Modal.Description>

                                    </Modal.Content>
                                </Modal>

                            </div>
                        </Card.Content>


                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <SendEtherForm
                                    toAddress={messagesData[i]["address"]}
                                    messageId={messagesData[i]["messageId"]}
                                />


                            </div>
                        </Card.Content>
                    </Card>
                );

            }

        return (
            <Layout>
                <ClipLoader
                    loading={this.state.loading}
                />
                <h1>{this.state.place}</h1>
            <h1>に書かれたメッセージ</h1>
                <Card.Group>

                    {messagesDataNew}

                </Card.Group>

            </Layout>

        )
}
}

export default MessagesShow;