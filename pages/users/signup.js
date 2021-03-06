import React, { Component } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react';
import firebase from 'firebase';
import LoginSignHeader from "../../components/LoginSignHeader";
import LoginSignLayout from "../../components/LoginSignLayout";



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
    apiKey: "AIzaSyCRS9Dk4CH6N9P5ZcRelu_DnW-kT7r4O3c",
    authDomain: "pinearth-93101.firebaseapp.com",
    databaseURL: "https://pinearth-93101.firebaseio.com",
    projectId: "pinearth-93101",
    storageBucket: "pinearth-93101.appspot.com",
    messagingSenderId: "669054719425"
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

        var image = '';

        var userId = '';

        var imageName='';


        firebase.auth().createUserWithEmailAndPassword(addressEmail, password)
            .then(
                () => {
                    const { currentUser} = firebase.auth();
                    userId= currentUser.uid;
                    firebase.database().ref(`/users`).push({userId, username, address})
                        .then(
                            () => {
                                var files = document.getElementById('file').files;
                                image = files[0];
                                imageName = image.name;
                                var ref = firebase.storage().ref().child(image.name);
                                ref.put(image).then(function(snapshot) {
                                    alert('アップロードしました');
                                })
                                    .then(
                                        () => {
                                            firebase.database().ref(`/images`).push({userId, imageName})
                                                .then(
                                                    () => {
                                                        this.setState({errorMessage: ""})
                                                        window.location.replace('http://localhost:3000')

                                                    }
                                                )
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

          <LoginSignLayout>
                <div style={contentStyle}>
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
                </div>
          </LoginSignLayout>





        )
    }

}

const style = {
    margin: 15,
};

const contentStyle = {
    position:"relative",
    width: "65%",
    margin:"auto",
    padding:"15px"
}

export default Signup;
