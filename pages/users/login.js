import React, { Component } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import { Link } from '../../routes';
import firebase from 'firebase';


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
        email: '',
        password: '',
        loading: ''
    }

    loginUser() {

        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                () => {
                    window.location.replace('http://localhost:3000')
                }
            )
            .catch(()=> {
                console.log("your login failed")
            })
console.log("why u can sign in?")

    }



    render() {

        console.log(this.state.email)
        return(

            <Layout>
                <h2>Login</h2>
                <Form>
                    <Form.Field>
                        <label>email</label>
                        <input
                            placeholder='email'
                            onChange={event => this.setState({ email: event.target.value})}
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
