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
import factory from '../ethereum/factory';
import Message from '../ethereum/message';



var config = {
    apiKey: "AIzaSyCRS9Dk4CH6N9P5ZcRelu_DnW-kT7r4O3c",
    authDomain: "pinearth-93101.firebaseapp.com",
    databaseURL: "https://pinearth-93101.firebaseio.com",
    projectId: "pinearth-93101",
    storageBucket: "pinearth-93101.appspot.com",
    messagingSenderId: "669054719425"
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

    ////DBからデータを取得する場合
    // getMessagesArray() {


    //     var messages = [];

    //     var message='';

    //     var messagePlace = '';

    //     var messageAuthor = '';

    //     var messageAddress = '';

    //     var messageId ='';

    //     var messageEther = '';

    //     var messageTransactionId = '';

    //     var messageIpfsId ='';

    //     var messagesPostDate = '';

    //     var sortedArray = [];

    //     var messagesEtherSentDate = '';

    //     const here = this.state.place;


    //     firebase.database().ref("/messages")

    //         .on('value', snapshot => {
    //             snapshot.forEach(function (childSnapshot) {

    //                 const messagesData = childSnapshot.val();


    //                 message = messagesData['message'];

    //                 messagePlace = messagesData['place'];

    //                 messageAuthor = messagesData['postUsername'];

    //                 messageAddress = messagesData['postUserAddress'];

    //                 messageId = messagesData['messageId'];

    //                 messageEther = messagesData['amountEther'];

    //                 messageTransactionId = messagesData['transactionId'];

    //                 messageIpfsId = messagesData['ipfsId'];

    //                 messagesPostDate =  messagesData['postDate'];

    //                 messagesEtherSentDate =  messagesData['etherSentDate'];




    //                 if (messageEther === undefined){

    //                     messageEther = 0;

    //                 }else{

    //                     messageEther = messageEther*0.0001;

    //                 }



    //                 if( here === messagePlace) {

    //                     messages.push({ message:message, place: messagePlace, author: messageAuthor, address:messageAddress,
    //                         messageId: messageId, amountEther:messageEther, transactionId: messageTransactionId,
    //                         ipfsId: messageIpfsId, postDate: messagesPostDate, etherSentDate: messagesEtherSentDate});

    //                 }

    //             })

    //             // Ether量が多い記事が上に来るように降順にソート

    //             sortedArray=
    //                 messages.sort(function(a,b){


    //                     return (a.etherSentDate>b.etherSentDate) ? -1 : 1;

    //                 });

    //             // this.setState({messagesArray:sortedArray});

    //         }).bind(this);


    // }

    
    //ブロックチェーン上からデータを取得する場合
    async getMessagesArrayFromBlockChain(){


        var messages = [];
        var messagePlace = '';
        var awsrequests = ""
        var place = '';
        var messageTransactionId = '';
        var messageTransactionIds = [];
        var savedPlaceName =  sessionStorage.getItem('place');

        if(savedPlaceName = null){
            place = this.state.place
        }else{
            place =  sessionStorage.getItem('place')
        }

        firebase.database().ref("/messages")
            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const messagesData = childSnapshot.val();

                    messagePlace = messagesData['place'];
                    messageTransactionId = messagesData['transactionId'];

                    if( messagePlace === place) {
                        messageTransactionIds.push({ transactionId: messageTransactionId });
                    }

                })
                // this.setState({messagesArray:sortedArray});
            }).bind(this);

        console.log("hello");
        console.log(place);
        console.log(messagePlace);
        console.log(messageTransactionIds);
        awsrequests = await factory.methods.searchMessages(place).call({ from: "0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22" })

        for (var i = 0; i < awsrequests.length; i++) {

            var newMessage = await Message(awsrequests[i]);

            var messageContent =  await newMessage.methods.getMessage().call({ from: "0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22" });

            console.log(messageContent);



            messages.push({ message:messageContent[3], place: messageContent[2], author: messageContent[1],

                    ipfsId: messageContent[4], transactionId: "0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22"});
        }

        this.setState({messagesArray:messages});

    }



    componentDidMount() {

        var hereThis= this;


        var here = '';

        // if( sessionStorage.getItem('place')==null) {
            if (navigator.geolocation) {

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

                        var apiKey = 'AIzaSyDbAOtIl2hgmopE9sk4K95XqUVxjrTfsRw';

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
                            // hereThis.getMessagesArray();
                            hereThis.getMessagesArrayFromBlockChain();
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

    //そのaddressのメッセージのEther残高の引き出し
    onClick = async () => {
        const accounts = await web3.eth.getAccounts();

        const theMessage = Message(このaddress);
        const summary = theMessage.methods.withdraw().send({
            from: accounts[0]
        });
    }




    render(){



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

            console.log(messagesData[i]["transactionId"]);





            ////使用するデバイスごとに見た目を変更（PC画面 or スマホ画面など）
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


                    } >

                    <MediaQuery maxWidth={1023} minWidth={767}>
                        <Modal.Content style={{width:700}} image>
                            <Image style={{width:400, height:250}} src={ipfsImageUrl} />
                            <Modal.Description>
                                <p style={{width:300}}>{messagesData[i]["author"]}</p>
                                <hr color="#D8D8D8" size="1"　width="200" noshade/>
                                <p style={{width:300}}>{messagesData[i]["message"]}</p>
                                <hr color="#D8D8D8" size="1" width="200" noshade/>
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
                                                <MediaQuery query="(min-width: 1024px)">
                                                    <Header> {messagesData[i]["transactionId"]}</Header>
                                                </MediaQuery>
                                                <MediaQuery query="(max-width: 1023px)">
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
                                                <MediaQuery query="(max-width: 767px)">
                                                    <Header> {responsiveIpfsId}</Header>
                                                </MediaQuery>

                                            </Modal.Description>

                                        </Modal.Content>
                                    </Modal>

                                </div>



                            </Modal.Description>

                        </Modal.Content>
                    </MediaQuery>


                    <MediaQuery query="(max-width: 767px)">

                        <Modal.Content image>
                            <Image  src={ipfsImageUrl} wrapped size='medium'  />
                            <Modal.Description>
                                <section>
                                    <Header>{messagesData[i]["author"]}</Header>
                                    <hr color="#D8D8D8" size="1"　width="300" noshade/>
                                </section>
                                <p >{messagesData[i]["message"]}</p>
                                <hr color="#D8D8D8" size="1" width="300" noshade/>
                                <p>Amount Of Ether</p>
                                <p>{messagesData[i]["amountEther"]}</p>
                            </Modal.Description>
                            <Modal.Description >
                                <SendEtherForm
                                    toAddress={messagesData[i]["address"]}
                                    messageId={messagesData[i]["messageId"]}
                                />



                                <div　className='ui two buttons' style={{marginTop:15}} >
                                    <Modal trigger={
                                        <Button basic color='grey'>
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

                                <div　className='ui two buttons'  style={{marginTop:15}} >
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

                    </MediaQuery>






                     <MediaQuery query="(min-width: 1024px)">
        <Modal.Content style={{width:930}} image>
            <Image style={{width:600, height:450}} src={ipfsImageUrl} />
            <Modal.Description>
                <section style={{width: 300}}>
                    <Header>{messagesData[i]["author"]}</Header>
                </section>
                <hr color="#D8D8D8" size="1"　width="200" noshade/>
                <p style={{width:300}}>{messagesData[i]["message"]}</p>
                <hr color="#D8D8D8" size="1" width="200" noshade/>
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

                <div style={{marginTop:10}}>
                    <Modal trigger={
                        <Button style={{width:150, marginTop:10}}basic color='grey'>
                            引き出す
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



            </Modal.Description>

        </Modal.Content>
                     </MediaQuery>

        </Modal>

            );
        
        }

        return (
            <Layout>
                <MediaQuery query="(min-width: 769px)">
                    <div style={contentStyle}>
                        <ClipLoader
                            loading={this.state.loading}
                        />
                        <h1>{this.state.place}</h1>
                        <h1>に書かれたメッセージ</h1>
                        <Card.Group>

                            {messagesDataNew}

                        </Card.Group>
                    </div>
                </MediaQuery>
                <MediaQuery query="(max-width: 768px)">
                    <div style={minContentStyle}>
                        <ClipLoader
                            loading={this.state.loading}
                        />
                        <h1>{this.state.place}</h1>
                        <h1>に書かれたメッセージ</h1>
                        <div>
                            <Card.Group style={minCardStyle}>

                                {messagesDataNew}

                            </Card.Group>
                        </div>
                    </div>
                </MediaQuery>
                

            </Layout>

        )
    }
}

export default MessagesIndex;


const contentStyle = {
    position:"relative",
    width: "65%",
    margin:"auto",
    padding:"15px"
}

const minContentStyle = {
    width: "90%",
    margin:"auto"
}

const minCardStyle = {
    padding:"12px",
    margin:"auto",
    width:"100%"
}