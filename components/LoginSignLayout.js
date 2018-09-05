import React from 'react';
import LoginSignHeader from './LoginSignHeader';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

export default props => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
            </Head>
            <div style = {containerStyle}>
                <LoginSignHeader/>
                {props.children}
            </div>
        </Container>
    )
}

const containerStyle = {
    position: "absolute",
    left: "0px",
    right: "0px"
}