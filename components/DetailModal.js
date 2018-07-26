import React, { Component }from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'

class DetailModal extends Component{








    render(){

        return(
            <Modal   trigger={<Button>詳細をみる</Button>} >
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                <Button onClick={()=>{this.props.closeModal()}}>Close</Button>
            </Modal>
        )
    }



}

export default DetailModal;