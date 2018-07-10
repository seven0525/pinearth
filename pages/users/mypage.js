import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Modal,  Header, Image } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';
import { ClipLoader } from 'react-spinners';
import MapComponent from '../../components/MapComponent';

class MyPage extends Component {

    render() {

        return (
            <Layout>
                <h1>my page</h1>
                <h3>今までにメッセージを保存した場所</h3>
                <MapComponent/>
            </Layout>
        )
    }

}


export default MyPage;