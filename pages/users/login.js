import React, { Component } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from '../../routes';

const Div = styled.div`
    width: 300px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
    marginLeft:300px
    
`;

class Login extends Component {



    render() {
        return(

            <Layout>
                <h2>Login</h2>
                <Form>
                    <Form.Field>
                        <label>email</label>
                        <input placeholder='email' />
                    </Form.Field>
                    <Form.Field>
                        <label>password</label>
                        <input placeholder='passwod' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                </Form>




                        <h4>サインアップは
                            <Link route="/users/signup">
                                <a>
                            こちら
                                </a>
                            </Link>

                            へ</h4>



            </Layout>



        )
    }

}

const style = {
    margin: 15,
};

export default Login;
