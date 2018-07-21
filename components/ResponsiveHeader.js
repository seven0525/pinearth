import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import firebase from "firebase";


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

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

function ResponsiveHeader(props) {

    // var  savedUserNickname = '';



    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("User is signed in.")
            const { currentUser } = firebase.auth();

            var userId = currentUser.uid;

            var savedUserId = '';

            var  savedUserNickname = '';

            const firebaseUsersRef = firebase.database().ref(`/users`);

            firebaseUsersRef
                .on("value", function(snapshot) {

                    snapshot.forEach(function (childSnapshot) {

                        const childData = childSnapshot.val();
                        savedUserId = childData.userId;

                        if( userId === savedUserId ) {
                            savedUserNickname = childData.username;
                        }


                    });

                    hereThis.setState({username: savedUserNickname});

                });


        } else {
            console.log("User is not signed in.")
            window.location.replace('http://localhost:3000/users/login')

        }
    });

    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "#0066ff"}}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        TimeCapsule
                    </Typography>
                    <Button color="inherit">{savedUserNickname}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}


export default withStyles(styles)(ResponsiveHeader);