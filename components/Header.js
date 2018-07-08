import React, { Component } from 'react';
import  { Menu, Icon } from'semantic-ui-react';
import { Link } from '../routes';
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



class Header extends Component {


    componentDidMount() {

        const url = window.location.href;


        if(url ===  "http://localhost:3000/") {

            // const {currentUser} = firebase.auth();
            //
            // console.log(currrentUser);
        }
        }



    signOut() {
        firebase.auth().signOut().then(function() {
            console.log('Signed Out');
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }

    render(){

        return (
            <Menu color='blue' inverted widths={3}>
                <Link route="/">
                    <a>
                <Menu.Item name='Time Coupsel'  />
                    </a>
                </Link>
                <Menu.Item
                    name='signout'
                    onClick={()=>{this.signOut()}}
                />
                <Menu.Item
                >
                    <Icon link name='user' />
                </Menu.Item>
            </Menu>

        );
};
}



export default Header;