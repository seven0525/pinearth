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

    state={
        username: ''
    }

    componentWillMount() {

        var hereThis= this;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log("User is signed in.")
                const { currentUser } = firebase.auth();

                var userId = currentUser.uid;

                console.log(userId);
                var savedUserId = '';

                var  savedUserNickname = '';

                const firebaseUsersRef = firebase.database().ref(`/users`);

                firebaseUsersRef
                    .on("value", function(snapshot) {

                        snapshot.forEach(function (childSnapshot) {

                            const childData = childSnapshot.val();
                            savedUserId = childData.userId;
                            console.log(savedUserId);
                            console.log(childData);

                            if( userId === savedUserId ) {
                                savedUserNickname = childData.username;
                                console.log(savedUserNickname)
                            }


                        });

                        hereThis.setState({username: savedUserNickname});
                        console.log(savedUserNickname);
                        console.log(hereThis.state.username);

                    });







            } else {
                console.log("User is not signed in.")
                window.location.replace('http://localhost:3000/users/login')

            }
        });

    }


    componentDidMount() {

        const url = window.location.href;


        if(url ===  "http://localhost:3000/") {

            const {currentUser} = firebase.auth();

            //
            console.log(firebase.auth());
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
                    <Icon link name='user'>{this.state.username}</Icon>
                </Menu.Item>
            </Menu>

        );
};
}



export default Header;