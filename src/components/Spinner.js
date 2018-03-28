import React, { Component } from 'react';
import { Container,  Content, Spinner } from 'native-base';
export default class Loder extends Component {
    render() {
        return (
            <Container>

                <Content>
                    <Spinner />

                </Content>
            </Container>
        );
    }
}