import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Card, Image, Header, Modal, Form } from 'semantic-ui-react'
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';




class MessagesShow extends Component {

    state={
        place:'',
        loading: true,
        ido:'',
        keido:''
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
                            const herePlaceNames = here.match("(.{2,3}[都道府県].{1,3}[区市町])");
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


    render(){
        return (
            <Layout>
                <ClipLoader
                    loading={this.state.loading}
                />
                <h1>{this.state.place}</h1>
            <h1>に書かれたメッセージ</h1>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                            <Card.Header>オススメのレストラン</Card.Header>
                            <Card.Meta>コウスケ</Card.Meta>
                            <Card.Description>
                               中央駅の一番街のとんかつやがめっちゃ美味しかった
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
                                    <Modal.Content image >
                                        <Image wrapped size='medium' src='/images/avatar/large/rachel.png' />
                                        <Modal.Description>
                                            <Header>0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22</Header>
                                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                                            <p>Is it okay to use this photo?</p>
                                        </Modal.Description>

                                    </Modal.Content>
                                </Modal>

                            </div>
                        </Card.Content>

                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Modal trigger={
                                    <Button basic color='green'>
                                        投げ銭
                                    </Button>

                                }>
                                    <Modal.Header>投げ銭したい量を記入してください</Modal.Header>
                                    <Modal.Content image>
                                        {/*<Image wrapped size='medium' src='/images/avatar/large/rachel.png' />*/}
                                        {/*<Modal.Description>*/}
                                            {/*<Header>0x7fdaa87ae97c15443a1057940e2ca3b3ce4ecb22</Header>*/}
                                            {/*<p>We've found the following gravatar image associated with your e-mail address.</p>*/}
                                            {/*<p>Is it okay to use this photo?</p>*/}
                                        {/*</Modal.Description>*/}
                                        <Form>
                                            <Form.Field>
                                                <label>Amount of ether</label>
                                                <input /> ether
                                            </Form.Field>
                                        </Form>
                                    </Modal.Content>
                                </Modal>

                            </div>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                            <Card.Header>Molly Thomas</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>
                                Molly wants to add you to the group <strong>musicians</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='red'>
                                    トランザクションIDを確認する
                                </Button>

                            </div>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    投げ銭
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/jenny.jpg' />
                            <Card.Header>Jenny Lawrence</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>Jenny requested permission to view your contact details</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    投げ銭
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Layout>

        )
}
}

export default MessagesShow;