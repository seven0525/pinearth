import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../routes';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebase/storage';


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



class HomeIndex extends Component {

    componentDidMount(){

        var storageRef = firebase.storage().ref();

    }

    componentWillMount() {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is signed in.")
                const { currentUser } = firebase.auth();

            } else {
                console.log("User is not signed in.")
                window.location.replace('http://localhost:3000/users/login')

            }
        });
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