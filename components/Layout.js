import React from 'react';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';

export default props => {
    return (
        <Container>
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
            </Head>
            <Header/>
            {props.children}
        </Container>
    )
}