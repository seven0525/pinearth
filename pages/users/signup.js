import React, { Component } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
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

class Signup extends Component {

    state={
        username: '',
        address: '',
        password: '',
        loading: '',
        errorMessage: ''
    }

    signupUser() {
        const {username, address, password } = this.state;

        const addressEmail = address + '@gmail.com';

        firebase.auth().createUserWithEmailAndPassword(addressEmail, password)
            .then(
                () => {
                    firebase.database().ref(`/users`).push({ username, address})
                        .then(
                            () => {
                                var files = document.getElementById('file').files;
                                var image = files[0];

                                var ref = firebase.storage().ref().child(image.name);
                                ref.put(image).then(function(snapshot) {
                                    alert('アップロードしました');
                                })
                                    .then(
                                        () => {
                                            this.setState({errorMessage: ""})
                                            window.location.replace('http://localhost:3000')
                                        })
                                ;
                            }
                        )

                })
            .catch(()=> {
                this.setState({errorMessage: "サインアップに失敗しました"})
            })


    }

    render() {
        return(

            <Layout>
                <h2>signup</h2>
                <Form error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>username</label>
                        <input placeholder='username'
                               onChange={event => this.setState({ username: event.target.value})}

                        />
                    </Form.Field>
                    <Form.Field>
                        <label>ether address</label>
                        <input placeholder='ether address'
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
                        <label>avatar</label>
                        <input type="file" id="file" />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='I agree to the Terms and Conditions' />
                    </Form.Field>


                    <Message error header="Opps" content={this.state.errorMessage}/>
                    <Button type='submit'
                            onClick={() => {this.signupUser()}}
                    >Submit</Button>
                </Form>



            </Layout>



        )
    }

}

const style = {
    margin: 15,
};

export default Signup;
