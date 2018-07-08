import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';


class MessageForm extends Component {





    static async getInitialProps () {
        const res = await fetch('https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false&latlng=35.6909389,139.6952959&key=AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0')
        const data = await res.json()

        console.log(data)
        return {  address: data.results[0].address_components[3].long_name }
    }



    componentDidMount() {
        if( navigator.geolocation )
        {
            alert( "あなたの端末では、現在位置を取得することができます。" ) ;
            console.log("あなたの端末では、現在位置を取得することができます");

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

                        // アラート表示
                        alert("あなたの現在位置は、\n[" + ido + "," + keido + "]\nです。");

                        var apiKey = 'AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0';

                        var requestURL = 'https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false';

                        requestURL += '&latlng=' + ido + ',' + keido;
                        requestURL += '&key=' + apiKey;
                        // fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=39cd3139183a4de3829d88dc70e82693")
                        fetch('https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false&latlng=35.6909389,139.6952959&key=AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0')
                            .then(responce=> {
                                console.log(responce.json())
                                console.log(responce)
                                console.log("fuck")
                                // console.log(responce.results[0]['formatted_address'])
                                // console.log(responce.results[0]['formatted_address'])

                            }).catch(() => {
                                console.log("oogle map api の取得に失敗")
                            }
                        )

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

    render() {
        return (
            <Layout>
                <div>
                    <h1>aaa{this.props.address}</h1>
                    <Form>
                    <Form.Input fluid label='現在地' placeholder='東京都' />
                    <Form.TextArea label='伝えたいこと' placeholder='Tell us more about you...' />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>保存する</Form.Button>
                </Form>
                </div>
            </Layout>

        )
    }
}

export default MessageForm;