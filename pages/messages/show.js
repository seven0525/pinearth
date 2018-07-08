import React, { Component }from 'react';
import Layout from '../../components/Layout';
import { Button, Card, Image, Header, Modal } from 'semantic-ui-react'
import { Link } from '../../routes';
import styled from 'styled-components';




class MessagesShow extends Component {
    render(){
        return (
            <Layout>
            <h1>現在地のメッセージ</h1>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/steve.jpg' />
                            <Card.Header>オススメのレストラン</Card.Header>
                            <Card.Meta>コウスケ</Card.Meta>
                            <Card.Description>
                               中央駅の一番街のとんかつやがめっちゃ美味しかった
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='red'>
                                    トランザクションIDを確認する
                                </Button>

                            </div>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    投げ銭
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/molly.png' />
                            <Card.Header>Molly Thomas</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>
                                Molly wants to add you to the group <strong>musicians</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='red'>
                                    トランザクションIDを確認する
                                </Button>

                            </div>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    投げ銭
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Image floated='right' size='mini' src='/images/avatar/large/jenny.jpg' />
                            <Card.Header>Jenny Lawrence</Card.Header>
                            <Card.Meta>New User</Card.Meta>
                            <Card.Description>Jenny requested permission to view your contact details</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <Button basic color='green'>
                                    投げ銭
                                </Button>

                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Layout>

        )
}
}

export default MessagesShow;