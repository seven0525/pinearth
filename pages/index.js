import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../routes';
import styled from 'styled-components';


const Div = styled.div`
    width: 300px;
    height: 50px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    margin: auto;
`;



class HomeIndex extends Component {

    render() {
        return (
            <Layout>
                 <Div>

                    <Link route="/messages/new">
                    <a>
                <Button
                    basic color='orange'
                    content='伝える'
                    size='massive'
                    style={styles.saveButtonStyle}
                />
                    </a>
                </Link>
                <Button basic color='teal'
                        content='みてみる'
                        size='massive'
                        // style={styles.showButtonStyle}
                />
                </Div>
            </Layout>

        )
    }
}

const styles = {
    saveButtonStyle: {
        marginBottom:20
    },
    showButtonStyle: {
        marginTop:200
    }

};


export default HomeIndex;