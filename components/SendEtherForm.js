import React, {Component} from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'
import { Link } from '../routes';
import styled from 'styled-components';
import { ClipLoader, BarLoader } from 'react-spinners';
import firebase from 'firebase';
import web3 from '../ethereum/web3';
import TimeCapsule from '../ethereum/TimeCapsule';



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

        try {

            const accounts = await web3.eth.getAccounts();

            await web3.eth.sendTransaction({
                to:this.props.toAddress, //そのメッセージを残した相手に変更予定
                from: accounts[0],
                value:web3.utils.toWei("0.0001", "ether")
            });

            this.setState({modalOpen: true, whileLoading: false});
        } catch(err){
            this.setState({sendErrorMesssage:"送金中にエラーが発生しました。再度お試しください。",
                errorModal:true
            })
        }
    };

    render() {
        return(
            <div className='ui two buttons'>
            <Button basic
                    color="green"
                    onClick={()=>this.sendEther()}
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
            <Link route="/">
                <a>
                    <Button primary>
                        topページに戻る
                    </Button>
                </a>
                </Link>
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
                    <Link route="/">
                        <a>
                            <Button primary>
                                topページに戻る
                            </Button>
                        </a>
                    </Link>
                </Modal.Actions>

                </Modal>
            </div>

        )
    }


}

export default SendEtherForm;