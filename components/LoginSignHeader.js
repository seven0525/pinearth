import React, { Component } from 'react';
import  { Menu, Icon } from'semantic-ui-react';
import { Link } from '../routes';
import MediaQuery from 'react-responsive';



class LoginSignHeader extends Component {



    render(){

        return (
            <div>
                <Menu color='#000000' inverted widths={3}>
                    <Menu.Item
                        // name='signout'
                        // onClick={()=>{this.signOut()}}
                    />
                    <Menu.Item name='PinEarth'  />
                    <Menu.Item
                    >
                        {/*<Icon link name='user'></Icon>*/}
                    </Menu.Item>
                </Menu>
            </div>
        );
    };
}

export default LoginSignHeader;