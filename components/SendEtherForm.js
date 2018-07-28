import React, {Component} from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'
import { Link } from '../routes';
import styled from 'styled-components';
import { ClipLoader, BarLoader } from 'react-spinners';
import firebase from 'firebase';
import web3 from '../ethereum/web3';
import TimeCapsule from '../ethereum/TimeCapsule';


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


class SendEtherForm extends Component {

    state={
        place:'',
        loading: true,
        ido:'',
        keido:'',
        usernameArray:'',
        messagesArray:'',
        _isMounted: false,
        messagesDataNewState:'',
        sendStatus:'',
        sendEther:'',
        modalOpen: false,
        whileLoading: false,
        errorModal: false,
        sendErrorMesssage:'',
        sendAddress:''

    }



    sendEther = async () => {

        this.setState({ whileLoading: true});

        var amountEther = 0;

        var nowAmountEther = '';

        var hereThis = this;

        try {

            const accounts = await web3.eth.getAccounts();

            await web3.eth.sendTransaction({
                to:this.props.toAddress, //そのメッセージを残した相手に変更予定
                from: accounts[0],
                value:web3.utils.toWei("0.0001", "ether")
            });
            const {messageId} = this.props;

            var uniqueKey = '';


            await firebase.database().ref('/messages')
                .once('value', snapshot => {

                    snapshot.forEach(function (childSnapshot) {


                        uniqueKey=childSnapshot.key;

                        const messagesData = childSnapshot.val();


                        var savedmessageId = messagesData['messageId'];

                        var savedusername = messagesData['postUsername'];

                        var savedAmountEther = messagesData['amountEther'];

                        var d = new Date();
                        var year  = d.getFullYear();
                        var month = d.getMonth() + 1;
                        var day   = d.getDate();
                        var hour  = ( d.getHours()   < 10 ) ? '0' + d.getHours()   : d.getHours();
                        var min   = ( d.getMinutes() < 10 ) ? '0' + d.getMinutes() : d.getMinutes();
                        var sec   = ( d.getSeconds() < 10 ) ? '0' + d.getSeconds() : d.getSeconds();

                        var etherSentDate =year*100000000000+ month *1000000000 + day * 100000000+  hour *3600+ min*60 + sec ;



                        //投げ銭されたメッセージとdbから取得されたメッセージが同じなら

                        if (savedmessageId === messageId && savedAmountEther === undefined ){


                            firebase.database().ref(`/messages/${uniqueKey}`).update({amountEther:1,etherSentDate:etherSentDate});


                        }else if(savedmessageId === messageId && savedAmountEther >= 1  ){


                           var nextAmountEther = savedAmountEther + 1

                            firebase.database().ref(`/messages/${uniqueKey}`).update({amountEther:nextAmountEther, etherSentDate:etherSentDate});


                        }



                    });


                })

            this.setState({modalOpen: true, whileLoading: false});
        } catch(err){
            this.setState({sendErrorMesssage:"送金中にエラーが発生しました。再度お試しください。"+ err,
                errorModal:true
            })
        }
    };

    closeModal(){

        this.setState({modalOpen:false})

        this.setState({errorModal: false, whileLoading: false})

        location.reload(false)


    }


    render() {
        return(
            <div className='ui two buttons'>
            <Button basic
                    color="green"
                    onClick={()=>this.sendEther()}
                    style={{marginTop:300}}
            >
                投げ銭

            </Button>
            <Modal
        open={this.state.modalOpen}
    >
    <Modal.Content >
        <h2>投げ銭に成功しました！</h2>

    </Modal.Content>
        <Modal.Actions>

                    <Button primary onClick={()=>this.closeModal()}>
                        topページに戻る
                    </Button>

        </Modal.Actions>
    </Modal>
        <Modal open={this.state.whileLoading}>
            <Modal.Content >
                <h2>送金中
                </h2>
                <BarLoader
                loading={this.state.whileLoading}
                />


            </Modal.Content>

        </Modal>
        <Modal open={this.state.errorModal}>
            <Modal.Content >
                <h2>{this.state.sendErrorMesssage}
                </h2>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary onClick={()=>this.closeModal()}>
                        topページに戻る
                    </Button>
                </Modal.Actions>

                </Modal>
            </div>

        )
    }


}

export default SendEtherForm;