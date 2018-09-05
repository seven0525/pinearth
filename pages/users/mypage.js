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

class MyPage extends Component {

    state={
        markerArray:'',
        markerElementArray:'',
        nextArray:''
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

                hereThis.setState({nextArray: hereThis.state.markerElementArray})


            }
       })



    }


    render() {

        var hereThis = this;


        return (
            <Layout>
                <h1>my page</h1>
                <h3>今までにメッセージを保存した場所</h3>
                <MypageMap markerElementArray={hereThis.state.markerElementArray}/>

            </Layout>
        )
    }

}

export default MyPage;