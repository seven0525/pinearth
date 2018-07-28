import React, { Component }from 'react';
import Layout from '../components/Layout';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'
import { Link } from '../routes';
import styled from 'styled-components';
import { ClipLoader, BarLoader } from 'react-spinners';
import firebase from 'firebase';
import web3 from '../ethereum/web3';
import TimeCapsule from '../ethereum/TimeCapsule';
import SendEtherForm from "../components/SendEtherForm";
import DetailModal from "../components/DetailModal";
import PictureCard from "../components/PictureCard";
import MediaQuery from 'react-responsive';



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

class MessagesIndex extends Component {

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
        sendAddress:'',
        cardModalOpen:false

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

        var messageEther = '';

        var messageTransactionId = '';

        var messageIpfsId ='';

        var messagesPostDate = '';

        var sortedArray = [];

        var messagesEtherSentDate = '';

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

                    messageEther = messagesData['amountEther'];

                    messageTransactionId = messagesData['transactionId'];

                    messageIpfsId = messagesData['ipfsId'];

                    messagesPostDate =  messagesData['postDate'];

                    messagesEtherSentDate =  messagesData['etherSentDate'];




                    if (messageEther === undefined){

                        messageEther = 0;

                    }else{

                        messageEther = messageEther*0.0001;

                    }



                    if( here === messagePlace) {

                        messages.push({ message:message, place: messagePlace, author: messageAuthor, address:messageAddress,
                            messageId: messageId, amountEther:messageEther, transactionId: messageTransactionId,
                            ipfsId: messageIpfsId, postDate: messagesPostDate, etherSentDate: messagesEtherSentDate});

                    }

                })

                // Ether量が多い記事が上に来るように降順にソート

                sortedArray=
                    messages.sort(function(a,b){


                        return (a.etherSentDate>b.etherSentDate) ? -1 : 1;

                    });

                this.setState({messagesArray:sortedArray});

            }).bind(this);


    }

    getMessagesArrayFromCache(place) {


        var messages = [];

        var message='';

        var messagePlace = '';

        var messageAuthor = '';

        var messageAddress = '';

        var messageId ='';

        var messageEther = '';

        var messageTransactionId = '';

        var messageIpfsId ='';

        var messagesPostDate = '';

        var sortedArray = [];

        var messagesEtherSentDate = '';

        const here = place;


        firebase.database().ref("/messages")

            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const messagesData = childSnapshot.val();


                    message = messagesData['message'];

                    messagePlace = messagesData['place'];

                    messageAuthor = messagesData['postUsername'];

                    messageAddress = messagesData['postUserAddress'];

                    messageId = messagesData['messageId'];

                    messageEther = messagesData['amountEther'];

                    messageTransactionId = messagesData['transactionId'];

                    messageIpfsId = messagesData['ipfsId'];

                    messagesPostDate =  messagesData['postDate'];

                    messagesEtherSentDate =  messagesData['etherSentDate'];




                    if (messageEther === undefined){

                        messageEther = 0;

                    }else{

                        messageEther = messageEther*0.0001;

                    }



                    if( here === messagePlace) {

                        messages.push({ message:message, place: messagePlace, author: messageAuthor, address:messageAddress,
                            messageId: messageId, amountEther:messageEther, transactionId: messageTransactionId,
                            ipfsId: messageIpfsId, postDate: messagesPostDate, etherSentDate: messagesEtherSentDate});

                    }

                })

                // Ether量が多い記事が上に来るように降順にソート

                sortedArray=
                    messages.sort(function(a,b){


                        return (a.etherSentDate>b.etherSentDate) ? -1 : 1;

                    });

                this.setState({messagesArray:sortedArray});

            }).bind(this);


    }










    componentDidMount() {

        var hereThis= this;


        var here = '';

        if( sessionStorage.getItem('place')==null) {
            if (navigator.geolocation) {
                // alert( "あなたの端末では、現在位置を取得することができます。" ) ;
                // console.log("あなたの端末では、現在位置を取得することができます");

                // 現在地を取得
                navigator.geolocation.getCurrentPosition(
                    // [第1引数] 取得に成功した場合の関数
                    function (position) {
                        // 取得したデータの整理
                        var data = position.coords;

                        // データの整理
                        var ido = data.latitude;
                        var keido = data.longitude;
                        var alt = data.altitude;
                        var accLatlng = data.accuracy;
                        var accAlt = data.altitudeAccuracy;
                        var heading = data.heading;			//0=北,90=東,180=南,270=西
                        var speed = data.speed;

                        hereThis.setState({ido: ido, keido: keido})

                        // アラート表示
                        // alert("あなたの現在位置は、\n[" + ido + "," + keido + "]\nです。");

                        var apiKey = 'AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0';

                        var requestURL = 'https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false';

                        requestURL += '&latlng=' + ido + ',' + keido;
                        requestURL += '&key=' + apiKey;


                        fetch(requestURL)
                            .then(response => response.json())
                            .then(json => {
                                here = json.results[0].formatted_address;
                                const hereBigName = here.match("(.{2,3}[都道府県])");
                                const hereSmallName = here.match("(.{1,3}[区市町])");
                                const hereAllNames = here.match("(.{2,3}[都道府県].{1,3}[区市町])");
                                var herePlaceNameWithSpace = ''

                                //geolocation API は返して来る値が一定でないので全てに対応できるようにする

                                if (hereAllNames === null || hereAllNames === '') {

                                    herePlaceNameWithSpace = hereBigName[0] + hereSmallName[0]

                                } else {

                                    herePlaceNameWithSpace = hereAllNames[0]

                                }

                                const herePlaceName = herePlaceNameWithSpace.replace(/\s+/g, '')
                                hereThis.setState({place: herePlaceName});
                                hereThis.setState({loading: false});
                                sessionStorage.setItem('place', herePlaceName);
                                sessionStorage.setItem('ido', ido);
                                sessionStorage.setItem('keido', keido);


                            }).then(() => {
                            hereThis.getMessagesArray();
                        });

                    },

                    // [第2引数] 取得に失敗した場合の関数
                    function (error) {
                        // エラーコード(error.code)の番号
                        // 0:UNKNOWN_ERROR				原因不明のエラー
                        // 1:PERMISSION_DENIED			利用者が位置情報の取得を許可しなかった
                        // 2:POSITION_UNAVAILABLE		電波状況などで位置情報が取得できなかった
                        // 3:TIMEOUT					位置情報の取得に時間がかかり過ぎた…

                        // エラー番号に対応したメッセージ
                        var errorInfo = [
                            "原因不明のエラーが発生しました…。",
                            "位置情報の取得が許可されませんでした…。",
                            "電波状況などで位置情報が取得できませんでした…。",
                            "位置情報の取得に時間がかかり過ぎてタイムアウトしました…。"
                        ];

                        // エラー番号
                        var errorNo = error.code;

                        // エラーメッセージ
                        var errorMessage = "[エラー番号: " + errorNo + "]\n" + errorInfo[errorNo];

                        // アラート表示
                        alert(errorMessage);

                    },

                    // [第3引数] オプション
                    {
                        "enableHighAccuracy": false,
                        "timeout": 8000,
                        "maximumAge": 2000,
                    }
                );

            }

            else {
                alert("あなたの端末では、現在位置を取得できません。");
                console.log("あなたの端末では、現在位置を取得できません");

            }
        }else{

            var savedPlaceName =  sessionStorage.getItem('place');
            var savedIdo = sessionStorage.getItem('ido');
            var savedKeido = sessionStorage.getItem('keido');


            console.log(savedPlaceName)

            hereThis.setState({place: savedPlaceName, ido:savedIdo, keido:savedKeido});
            hereThis.setState({loading: false});
            hereThis.getMessagesArrayFromCache(savedPlaceName);

        }
    }



    render(){

        console.log(this.state.cardModalOpen)


        const messagesDataNew = [];


        const messagesData = this.state.messagesArray;




        for (var i = 0; i < messagesData.length; i++) {

            var ipfsImageUrl = 'https://gateway.ipfs.io/ipfs/' +  messagesData[i]["ipfsId"];

            //スマホ版でトランザクションIDとipfsIDを改行してみやすくする(transactionId 66文字　IPFS 46文字)

            var responsiveTransactionId = '';

            var responsiveIpfsId = '';

            var strTransaction = messagesData[i]["transactionId"];

            var firstTransaction = strTransaction.slice(0,30);

            var secondTransaction = strTransaction.slice(30,62);

            var thirdTransavtion = strTransaction.slice(62,73);

            responsiveTransactionId = firstTransaction + "\n" + secondTransaction + "\n"+ thirdTransavtion

            var strIpfs = messagesData[i]["ipfsId"];

            var firstIpfs = strIpfs.slice(0,25);

            var secondIpfs = strIpfs.slice(25,40);

            var thirdIpfs = strIpfs.slice(40, 50);

            responsiveIpfsId = firstIpfs + "\n" + secondIpfs + "\n" + thirdIpfs;




            messagesDataNew.push(




                    <Modal trigger ={

                        <Card>
                            <Image src={ipfsImageUrl}/>

                            <Card.Content extra>
                                {messagesData[i]["postDate"]}
                            </Card.Content>
                            <Card.Content extra>
                                Amount Of Ether: {messagesData[i]["amountEther"]}ether
                            </Card.Content>


                        </Card>


                    } style={{width:1000}}>
        <Modal.Content image>
            <Image style={{width:600, height:450}} src={ipfsImageUrl} />
            <Modal.Description>
                <section>
                <Header>{messagesData[i]["author"]}</Header>
                    <hr color="#D8D8D8" size="3" noshade/>
                </section>
                <p style={{width:300}}>{messagesData[i]["message"]}</p>
                <hr color="#D8D8D8" size="3" noshade/>
                <p style={{width:300}}>Amount Of Ether</p>
                <p>{messagesData[i]["amountEther"]}</p>
            </Modal.Description>
            <Modal.Description style={{marginLeft:100}}>
        <SendEtherForm
            toAddress={messagesData[i]["address"]}
            messageId={messagesData[i]["messageId"]}
            />



            <div style={{marginTop:15}}>
                <Modal trigger={
                    <Button style={{width:150, marginTop:10}}basic color='grey'>
                        トランザクションIDを確認する
                    </Button>

                }>
                    <Modal.Header>このメッセージのトランザクションID</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <MediaQuery query="(min-width: 768px)">
                            <Header> {messagesData[i]["transactionId"]}</Header>
                            </MediaQuery>
                            <MediaQuery query="(max-width: 768px)">
                                <Header> {responsiveTransactionId}</Header>
                            </MediaQuery>

                        </Modal.Description>

                    </Modal.Content>
                </Modal>

            </div>

            <div  style={{marginTop:15}}>
        <Modal trigger={
            <Button basic color='grey'>
                ipfsIDを確認する
            </Button>

        }>
        <Modal.Header>このメッセージの IPFS ID</Modal.Header>
            <Modal.Content image>
                <Modal.Description>
                    <MediaQuery query="(min-width: 768px)">
                        <Header> {messagesData[i]["ipfsId"]}</Header>
                    </MediaQuery>
                    <MediaQuery query="(max-width: 768px)">
                        <Header> {responsiveIpfsId}</Header>
                    </MediaQuery>

                </Modal.Description>

            </Modal.Content>
            </Modal>

        </div>



        </Modal.Description>

        </Modal.Content>

        </Modal>
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

export default MessagesIndex;
