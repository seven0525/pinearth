import React, { Component } from 'react';
import Layout from '../components/Layout';
import { Button } from 'semantic-ui-react';



class HomeIndex extends Component {
    render() {
        return (
            <Layout>
                <Button
                    basic color='orange'
                    content='伝える'
                    size='massive'
                    style={styles.saveButtonStyle}
                />
                <Button basic color='teal'
                        content='みてみる'
                        size='massive'
                        style={styles.showButtonStyle}
                />
            </Layout>

        )
    }
}

const styles = {
    saveButtonStyle: {
        marginTop:200,
        marginLeft: 370
    },
    showButtonStyle: {
        marginTop:200
    }

};

export default HomeIndex;