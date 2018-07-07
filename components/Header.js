import React, { Component } from 'react';
import  { Menu } from'semantic-ui-react';

class Header extends Component {
    render(){

        return (
            <Menu color='blue' inverted widths={3}>
                <Menu.Item name='Time Coupsel'  />
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