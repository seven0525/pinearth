import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Form } from 'semantic-ui-react';
import { Link } from '../../routes';
import styled from 'styled-components';

class MessageForm extends Component {

    render() {
        return (
            <Layout>
                <div>
                    <Form>
                    <Form.Input fluid label='現在地' placeholder='東京都' />
                    <Form.TextArea label='伝えたいこと' placeholder='Tell us more about you...' />
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>保存する</Form.Button>
                </Form>
                </div>
            </Layout>

        )
    }
}

export default MessageForm;