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
import ipfs from '../../ethereum/ipfs';
import factory from '../../ethereum/factory';
import Message from '../../ethereum/message';

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

const ImgDiv = styled.div`

text-align: center
  margin: 5px 15px
  height: 200px
  width: 500px
  border-left: 1px solid gray
  border-right: 1px solid gray
  border-top: 5px solid gray
  border-bottom: 5px solid gray


`;

const ImgWrapper = styled.img`
   width: 100%
    height: 100%
`;

class MessageForm extends Component {

    state = {
        place: '',
        loading: true,
        ido:'',
        keido:'',
        message:'',
        submitLoading:false,
        modalOpen:false,
        buffer:'',
        ipfsHash:'',
        file:'',
        imagePreviewUrl:''
    }




    componentDidMount() {

        var hereThis= this;
        var here = '';

        if( sessionStorage.getItem('place')==null) {
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
            var savedIdo = Number(sessionStorage.getItem('ido'));
            var savedKeido = Number(sessionStorage.getItem('keido'));


            hereThis.setState({place: savedPlaceName, ido:savedIdo, keido:savedKeido});
            hereThis.setState({loading: false});


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

                    }


                })

            }).bind(this);



        const { place, message, ido, keido } = this.state;

        const messageId = Math.round(Math.random() * 100000000000);

        var d = new Date();
        var year  = d.getFullYear();
        var month = d.getMonth() + 1;
        var day   = d.getDate();

        var postDate = year + '-' + month + '-' + day + ' '

        this.setState({ submitLoading: true});


        try {


            const accounts = await web3.eth.getAccounts();

            var transactionId = '';

            var ipfsId = '';


            await ipfs.add(this.state.buffer, (err, ipfsHash) => {
                console.log(err,ipfsHash);

                this.setState({ ipfsHash:ipfsHash[0].hash });

                ipfsId = ipfsHash[0].hash;

                 firebase.database().ref(`/messages`).push({ place, message, postUserId, postUsername, postUserAddress, ido, keido, messageId,
                     transactionId, ipfsId, postDate })


            })

            await factory.methods.createMessage(place).send({ from: accounts[0] })

            const contractAddress = await factory.methods.getMessageAddress().call({ from: accounts[0] })


            await factory.methods.storeMessage(place, contractAddress)
            .send({ from: accounts[0] })

            const newMessage = await Message(contractAddress);


            await newMessage.methods
            .postMessage(message, postUsername, ipfsId)
            .send({ from: accounts[0],  gasLimit: 4700000 })
                .on('transactionHash', function(hash){
                    transactionId = hash;
            })






        } catch (err){

            // this.setState({ errorMessage: err.message });
            console.log(err.message)


        }

        this.setState({modalOpen: true})

        this.setState({ submitLoading: false, modalOpen: true });

    };

    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(file,reader)
    };

    convertToBuffer = async(file,reader) => {
        //file is converted to a buffer to prepare for uploading to IPFS
        const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
        this.setState({buffer});

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    };

    loadingAgain(){
        location.reload(false)
    }


    render() {

        let $imagePreview = null;

        if (this.state.imagePreviewUrl) {
            $imagePreview = (<ImgWrapper src={this.state.imagePreviewUrl} />);
        } else {
            $imagePreview = (<div>画像を選択するとここにプレビューが表示されます</div>);
        }

        return (
            <Layout>
                <div style={contentStyle}>
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
                            <input
                                type = "file"
                                onChange = {this.captureFile}
                            />

                        <ImgDiv>

                            {$imagePreview}

                        </ImgDiv>


                    <Form.Button loading={this.state.submitLoading}>保存する</Form.Button>
                </Form>



                    <Modal
                        style={{height: 380, marginBottom: 200}}
                        open={this.state.modalOpen}
                    >
                        <Modal.Header>あなたの思い出はこの場所に永遠に記録されました</Modal.Header>
                        <Modal.Content >
                            <MapComponent
                                ido = {this.state.ido}
                                keido={this.state.keido}
                            />
                            <dev>{this.state.transactionId}</dev>


                        </Modal.Content>
                        <Modal.Actions>
                            <Link route="/">
                                <a>
                            <Button primary　onClick={()=>{this.loadingAgain()}}>
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

const contentStyle = {
    position:"relative",
    width: "65%",
    margin:"auto",
    padding:"15px"
}

export default MessageForm;