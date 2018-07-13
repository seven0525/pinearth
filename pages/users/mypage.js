import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Modal,  Header, Image } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import MapComponent from '../../components/MapComponent';
import firebase from 'firebase';
import MypageMap from '../../components/MypageMap';
import {Marker} from "react-google-maps";

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

class MyPage extends Component {

    state={
        markerArray:'',
        markerElementArray:''
    }

    componentWillMount() {

        var hereThis=this;



        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {


                const {currentUser} = firebase.auth();

                var userId = currentUser.uid;


                const firebaseMessagesRef = firebase.database().ref(`/messages`);

                var mapPlaces = [];

                var savedUserId = '';

                firebaseMessagesRef
                    .on("value", function (snapshot) {

                        snapshot.forEach(function (childSnapshot) {

                            const childData = childSnapshot.val();


                            var savedIdo = childData.ido;

                            var savedKeido = childData.keido;

                            savedUserId = childData.postUserId;


                            if (userId === savedUserId) {

                                mapPlaces.push({ido: savedIdo, keido:savedKeido})
                            }

                        })

                        hereThis.setState({markerArray:mapPlaces})

                        var markerArrayNew = [];

                        for (var i = 0; i < mapPlaces.length; i++) {

                            markerArrayNew.push(
                                <Marker
                                 position={{ lat: mapPlaces[i].ido, lng: mapPlaces[i].keido }}
                                />

                            )

                        }


                        hereThis.setState({markerElementArray: markerArrayNew})



                    })

            }
       })



    }


    render() {

        var map = '';
        var hereThis = this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                map =  <MypageMap markerElementArray={hereThis.state.markerElementArray}/>
            }
        })

        return (
            <Layout>
                <h1>my page</h1>
                <h3>今までにメッセージを保存した場所</h3>
                {map}

            </Layout>
        )
    }

}


export default MyPage;