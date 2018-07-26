import React, { Component }from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'

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
                </Modal.Content>
                {/*<Button onClick={()=>{this.props.closeModal()}}>Close</Button>*/}
            </Modal>
        )
    }



}

export default DetailModal;