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

        var messageEther = '';

        var messageTransactionId = '';

        var messageIpfsId ='';

        var sortedArray = [];

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



                    if (messageEther === undefined){

                        messageEther = 0;

                    }else{

                        messageEther = messageEther*0.0001;

                    }



                    if( here === messagePlace) {

                        messages.push({ message:message, place: messagePlace, author: messageAuthor, address:messageAddress,
                            messageId: messageId, amountEther:messageEther, transactionId: messageTransactionId, ipfsId: messageIpfsId});

                    }

                })

                // Ether量が多い記事が上に来るように降順にソート

                sortedArray=
                    messages.sort(function(a,b){
                        return (a.amountEther>b.amountEther) ? -1 : 1;
                    });

                this.setState({messagesArray:sortedArray});

            }).bind(this);


    }




    componentDidMount() {

        var hereThis= this;


        var here = '';
        if( navigator.geolocation )
        {
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

                    hereThis.setState({ido: ido, keido:keido})

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

                            if (hereAllNames === null || hereAllNames === '' ){

                                herePlaceNameWithSpace = hereBigName[0] + hereSmallName[0]

                            }else{

                                herePlaceNameWithSpace = hereAllNames[0]

                            }

                            const herePlaceName = herePlaceNameWithSpace.replace(/\s+/g, '')
                            hereThis.setState({place: herePlaceName});
                            hereThis.setState({loading: false});
                        }).then(()=>{
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
    }



    render(){

        const messagesDataNew = [];


        const messagesData = this.state.messagesArray;




        for (var i = 0; i < messagesData.length; i++) {

            var ipfsImageUrl = 'https://gateway.ipfs.io/ipfs/' +  messagesData[i]["ipfsId"];


            messagesDataNew.push(
                <Card>
                    <Image src={ipfsImageUrl} />

                    <Card.Content>
                        {/*<Image floated='right' size='mini' src='/images/avatar/large/steve.jpg'/>*/}
                        <Card.Meta> {messagesData[i]["author"]}</Card.Meta>
                        <Card.Description>
                            {messagesData[i]["message"]}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        Amount Of Ether: {messagesData[i]["amountEther"]}ether
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
                                    <Modal.Description>
                                        <Header> {messagesData[i]["transactionId"]}</Header>

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

export default MessagesIndex;















// import React, { Component } from 'react';
// import Layout from '../components/Layout';
// import { Button } from 'semantic-ui-react';
// import { Link } from '../routes';
// import styled from 'styled-components';
// import firebase from 'firebase';
// import 'firebase/storage';
//
//
// const Div = styled.div`
//     width: 300px;
//     height: 50px;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     position: absolute;
//     margin: auto;
// `;
//
// var config = {
//     apiKey: "AIzaSyBC5188TstyDNnw0AdbCTYqyp7YyAx0DQ0",
//     authDomain: "timecapsule-3b1bd.firebaseapp.com",
//     databaseURL: "https://timecapsule-3b1bd.firebaseio.com",
//     projectId: "timecapsule-3b1bd",
//     storageBucket: "timecapsule-3b1bd.appspot.com",
//     messagingSenderId: "221653140896"
// };
//
// if (!firebase.apps.length) {
//     firebase.initializeApp(config);
// }
//
//
//
// class HomeIndex extends Component {
//
//     componentDidMount(){
//
//         var storageRef = firebase.storage().ref();
//
//     }
//
//     componentWillMount() {
//
//         firebase.auth().onAuthStateChanged(function (user) {
//             if (user) {
//                 console.log("User is signed in.")
//                 const { currentUser } = firebase.auth();
//
//             } else {
//                 console.log("User is not signed in.")
//                 window.location.replace('http://localhost:3000/users/login')
//
//             }
//         });
//     }
//
//     render() {
//         return (
//             <Layout>
//                  <Div>
//
//                     <Link route="/messages/new">
//                     <a>
//                 <Button
//                     basic color='orange'
//                     content='伝える'
//                     size='massive'
//                     style={styles.saveButtonStyle}
//                 />
//                     </a>
//                 </Link>
//
//                      <Link route="/messages/show">
//                          <a>
//                 <Button basic color='teal'
//                         content='みてみる'
//                         size='massive'
//                 />
//                          </a>
//                      </Link>
//                 </Div>
//             </Layout>
//
//         )
//     }
// }
//
// const styles = {
//     saveButtonStyle: {
//         marginBottom:20
//     },
//     showButtonStyle: {
//         marginTop:200
//     }
//
// };
//
//
// export default HomeIndex;