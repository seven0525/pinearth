import React, { Component } from 'react';
import  { Menu } from'semantic-ui-react';
import { Link } from '../routes';
import firebase from 'firebase';

class Header extends Component {

    componentWillMount() {

        // var config = {
        //     apiKey: "AIzaSyBC5188TstyDNnw0AdbCTYqyp7YyAx0DQ0",
        //     authDomain: "timecapsule-3b1bd.firebaseapp.com",
        //     databaseURL: "https://timecapsule-3b1bd.firebaseio.com",
        //     projectId: "timecapsule-3b1bd",
        //     storageBucket: "timecapsule-3b1bd.appspot.com",
        //     messagingSenderId: "221653140896"
        // };
        // firebase.initializeApp(config);
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
                    // name='messages'
                />
                <Menu.Item
                />
            </Menu>

        );
};
}



export default Header;