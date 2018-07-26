import React, { Component }from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'
import SendEtherForm from "./SendEtherForm";

class DetailModal extends Component{








    render(){

        return(
            <Modal   trigger={<Button>詳細をみる</Button>} >
                <Modal.Content image>
                    <Image wrapped size='medium' src={this.props.ipfsImageUrl} />
                    <Modal.Description>
                        <Header>{this.props.author}</Header>
                        <p>{this.props.message}</p>
                        <p>Amount Of Ether: {this.props.amountEther}</p>
                    </Modal.Description>
                    <Modal.Description style={{marginLeft:100}}>
                        <SendEtherForm/>



                        <div className='ui two buttons' style={{marginTop:15}}>
                            <Modal trigger={
                                <Button basic color='red'>
                                    トランザクションIDを確認する
                                </Button>

                            }>
                                <Modal.Header>このメッセージのトランザクションID</Modal.Header>
                                <Modal.Content image>
                                    <Modal.Description>
                                        <Header> {this.props.transactionId}</Header>

                                    </Modal.Description>

                                </Modal.Content>
                            </Modal>

                        </div>

                        <div className='ui two buttons' style={{marginTop:15}}>
                            <Modal trigger={
                                <Button basic color='red'>
                                    ipfsIDを確認する
                                </Button>

                            }>
                                <Modal.Header>このメッセージの IPFS ID</Modal.Header>
                                <Modal.Content image>
                                    <Modal.Description>
                                        <Header> {this.props.ipfsId}</Header>

                                    </Modal.Description>

                                </Modal.Content>
                            </Modal>

                        </div>



                    </Modal.Description>

                </Modal.Content>
                {/*<Button onClick={()=>{this.props.closeModal()}}>Close</Button>*/}
            </Modal>
        )
    }



}

export default DetailModal;