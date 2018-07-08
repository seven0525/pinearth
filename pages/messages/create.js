import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form, Image } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';

class MessageCreated extends Component {

    render() {
        return (
            <Layout>
                <div>
                    <h1>あなたのメッセージは</h1>
                    <Image src='/images/jp.jpeg' fluid />
                    <h1>に登録されました</h1>
                    <h2>トランザクションID : ?????????????</h2>

                </div>
            </Layout>

        )
    }
}

export default MessageCreated;