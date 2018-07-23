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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import { Link } from '../routes';







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
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
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

class ResponsiveHeader extends Component{

    state={
        top: false,
        left: false,
        bottom: false,
        right: false
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };


    render() {

        const sideList = (
            <div className={this.props.classes.list}>
                <List>{mailFolderListItems}</List>

            </div>
        );

        const fullList = (
            <div className={this.props.classes.fullList}>
                <List>{mailFolderListItems}</List>

            </div>
        );



        return (
            <div className={this.props.classes.root}>
                <AppBar position="static" style={{backgroundColor: "#0066ff"}}>
                    <Toolbar>
                        <Typography variant="title" color="#FFFFFF" className={this.props.classes.flex}>
                            <Link route="/">
                                <a style={{color:"#FFFFFF"}}>

                            TimeCapsule

                                </a>
                            </Link>
                        </Typography>
                        <Button onClick={this.toggleDrawer('right', true)} color="inherit">{this.props.username}</Button>
                        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer('right', false)}
                                onKeyDown={this.toggleDrawer('right', false)}
                            >
                                {sideList}
                            </div>
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default withStyles(styles)(ResponsiveHeader);