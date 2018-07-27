import React, { Component }from 'react';
import { Button, Card, Image, Header, Modal, Form, Input } from 'semantic-ui-react'

class PictureCard extends Component{






    render(){
        return(

            <Card>
                <Image src={this.props.ipfsImageUrl} />

                <Card.Content extra>
                    {this.props.postDate}
                </Card.Content>
                <Card.Content extra>
                    Amount Of Ether: {this.props.amountEther}ether
                </Card.Content>


            </Card>


        )
    }
}

export default PictureCard;

