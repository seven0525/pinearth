import React, { Component } from 'react';
import  { Menu, Icon } from'semantic-ui-react';
import { Link } from '../routes';
import MediaQuery from 'react-responsive';



class LoginSignHeader extends Component {



    render(){

        return (
            <Menu color='blue' inverted widths={3}>

                        <Menu.Item name='Time Coupsel'  />

                <Menu.Item
                    // name='signout'
                    // onClick={()=>{this.signOut()}}
                />
                <Menu.Item
                >
                    {/*<Icon link name='user'></Icon>*/}
                </Menu.Item>
            </Menu>


        );
    };
}



export default LoginSignHeader;