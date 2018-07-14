import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Modal,  Header, Image } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import MapComponent from '../../components/MapComponent';
import web3 from '../../ethereum/web3';
import TimeCapsule from '../../ethereum/TimeCapsule';
import firebase from 'firebase';

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

class MessageForm extends Component {

    state = {
        place: '',
        loading: true,
        ido:'',
        keido:'',
        message:'',
        submitLoading:false,
        modalOpen:false
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
                                   console.log(json)
                                   console.log(json.results[0]. formatted_address);
                                   here = json.results[0].formatted_address;
                                   const hereBigName = here.match("(.{2,3}[都道府県])");
                                   const hereSmallName = here.match("(.{1,3}[区市町])");
                                   const herePlaceNameWithSpace = hereBigName[0] + hereSmallName[0]
                                   const herePlaceName = herePlaceNameWithSpace.replace(/\s+/g, '')
                                   hereThis.setState({place: herePlaceName});
                                   hereThis.setState({loading: false});
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

    onSubmit = async event => {
        event.preventDefault();

        var postUserId = '';
        var postUsername = '';
        var postUserAddress = '';

        await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var currentUser = firebase.auth().currentUser;
                 postUserId = currentUser.uid;

            } else {
                console.log("user is not signed in")
            }
        })

        await firebase.database().ref('/users')
            .on('value', snapshot => {
                snapshot.forEach(function (childSnapshot) {

                    const usersData = childSnapshot.val();

                    var savedUsername = usersData['username'];

                    var savedUserid = usersData['userId'];

                    var savedUserAddress = usersData['address'];


                    if( postUserId === savedUserid) {

                       postUsername = savedUsername;
                       postUserAddress = savedUserAddress;

                       console.log(postUserAddress)

                    }


                })

            }).bind(this);



        const { place, message, ido, keido } = this.state;

        const messageId = Math.round(Math.random() * 100000000000);

        this.setState({ submitLoading: true});


        try {


            const accounts = await web3.eth.getAccounts();

            console.log(accounts);

            await TimeCapsule.methods.postMessage(
                "Kosuke",
                message,
                place
            ).send({ from: accounts[0] })


            await firebase.database().ref(`/messages`).push({ place, message, postUserId, postUsername, postUserAddress, ido, keido, messageId })



        } catch (err){

            // this.setState({ errorMessage: err.message });
            consol.log(err.message)


        }

        this.setState({modalOpen: true})

        console.log(this.state.modalOpen)

        this.setState({ submitLoading: false, modalOpen: true });

    };

    render() {

        return (
            <Layout>
                <div>
                    <Form onSubmit={this.onSubmit}>
                    <Form.Input fluid label='現在地' placeholder='東京都'>
                        <h2> {this.state.place}</h2>
                        <ClipLoader
                            loading={this.state.loading}
                        />
                    </Form.Input>
                    <Form.TextArea label='伝えたいこと'
                                   placeholder='Tell us more about you...'
                                   value={this.state.message}
                                   onChange={event =>
                                       this.setState({ message: event.target.value})}
                    />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button loading={this.state.submitLoading}>保存する</Form.Button>
                </Form>



                    <Modal
                        style={{height: 380, marginBottom: 200}}
                        open={this.state.modalOpen}
                    >
                        <Modal.Header>あなたのメッセージはここに保存されました！</Modal.Header>
                        <Modal.Content >
                            <MapComponent
                                ido = {this.state.ido}
                                keido={this.state.keido}
                            />


                        </Modal.Content>
                        <Modal.Actions>
                            <Link route="/">
                                <a>
                            <Button primary>
                                topページに戻る
                            </Button>
                                </a>
                            </Link>
                        </Modal.Actions>
                    </Modal>


                </div>
            </Layout>

        )
    }
}

export default MessageForm;