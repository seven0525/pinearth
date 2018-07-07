import React, { Component } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import { Link } from '../../routes';
import firebase from 'firebase';

var currentUser = ''


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

class Login extends Component {

    state={
        address: '',
        password: '',
        loading: '',
        errorMessage: ''
    }

    loginUser() {

        const {address, password } = this.state;

        const addressEmail = address + '@gmail.com';

        firebase.auth().signInWithEmailAndPassword(addressEmail, password)
            .then(

                () => {
                    this.setState({errorMessage: ""})
                  currentUser= firebase.auth().currentUser;

                    window.location.replace('http://localhost:3000')
                }
            )
            .catch(()=> {
                this.setState({errorMessage: "ログインに失敗しました"})
            })

    }
    render() {

        console.log(this.state.email)
        return(

            <Layout>
                <h2>Login</h2>
                <Form error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>ether address</label>
                        <input
                            placeholder='ether adress'
                            onChange={event => this.setState({ address: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>password</label>
                        <input placeholder='passwod'
                               onChange={event => this.setState({ password: event.target.value})}
                        />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Message error header="Opps" content={this.state.errorMessage}/>
                    <Button type='submit'
                            onClick={() => {this.loginUser()}}
                    >Submit</Button>
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
