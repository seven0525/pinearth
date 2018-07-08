import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../routes';
import styled from 'styled-components';
import firebase from 'firebase';


const Div = styled.div`
    width: 300px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
`;

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




    // console.log(firebase.auth().currentUser);
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) {
    //         console.log("User is signed in.")
    //     } else {
    //         console.log("User is not signed in.")
    //         window.location.replace('http://localhost:3000/users/login')
    //
    //     }
    // });



class HomeIndex extends Component {

    componentWillMount() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is signed in.")
            } else {
                console.log("User is not signed in.")
                window.location.replace('http://localhost:3000/users/login')

            }
        });



        fetch('https://maps.googleapis.com/maps/api/geocode/json?language=ja&sensor=false&latlng=35.6909389,139.6952959&key=AIzaSyBjaU7Kz8PQ3gPIJmf70fm-Zvenjq9suT0')
            .then(responce => {
                console.log(responce.json())
                console.log(responce)
                // console.log(responce.results[0]['formatted_address'])
                // console.log(responce.results[0]['formatted_address'])


            })

    }

    render() {
        return (
            <Layout>
                 <Div>

                    <Link route="/messages/new">
                    <a>
                <Button
                    basic color='orange'
                    content='伝える'
                    size='massive'
                    style={styles.saveButtonStyle}
                />
                    </a>
                </Link>

                     <Link route="/messages/show">
                         <a>
                <Button basic color='teal'
                        content='みてみる'
                        size='massive'
                        // style={styles.showButtonStyle}
                />
                         </a>
                     </Link>
                </Div>
            </Layout>

        )
    }
}

const styles = {
    saveButtonStyle: {
        marginBottom:20
    },
    showButtonStyle: {
        marginTop:200
    }

};


export default HomeIndex;