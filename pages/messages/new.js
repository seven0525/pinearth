import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Modal,  Header, Image } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import MapComponent from '../../components/MapComponent';
import web3 from '../../ethereum/web3';
import TimeCapsule from '../../ethereum/TimeCapsule';

class MessageForm extends Component {

    state = {
        place: '',
        loading: true,
        ido:'',
        keido:'',
        message:'',
        submitLoading:false
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
                                   const herePlaceNames = here.match("(.{2}[都道府県]|.{3}県)");
                                  const herePlaceName = herePlaceNames[0];
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

        // const campaign = Campaign(this.props.address);

        const { place, message } = this.state;

        this.setState({ submitLoading: true});


        try {


            const accounts = await web3.eth.getAccounts();

            console.log(accounts);

            await TimeCapsule.methods.postMessage(
                "Kosuke",
                message,
                place
            ).send({ from: accounts[0] })


            // Router.pushRoute(`/campaigns/${this.props.address}/requests`);


        } catch (err){

            // this.setState({ errorMessage: err.message });
            consol.log(err.message)


        }

        this.setState({ submitLoading: false });

    };

    render() {

        console.log(this.state.message);

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



                    <Modal style={{height: 400}} trigger={<Button>保存する</Button>}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content >
                            <MapComponent
                                ido = {this.state.ido}
                                keido={this.state.keido}
                            />


                        </Modal.Content>
                    </Modal>


                </div>
            </Layout>

        )
    }
}

export default MessageForm;