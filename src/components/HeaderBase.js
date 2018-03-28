import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class HeaderBase extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor: "#B75F4B"}} >
                    <Left>
                        <Button transparent style={{marginTop: 10}}>
                            <Title>Best Deals</Title>
                        </Button>
                    </Left>
                    
                    <Right>
                        <Button transparent>
                            <Icon name='person' />
                        </Button>

                        <Button transparent>
                            <Icon name='add' />
                        </Button>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}