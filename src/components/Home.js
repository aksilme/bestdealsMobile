import React from 'react';
import {Font} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Actions } from 'react-native-router-flux'
import ajax from '../ajax'
import DealList from './DealList';
import Loading from "./Loading";





export default class Home extends React.Component {
    state = {
        deals: [],
        fontLoaded: false,
    };


    async componentDidMount() {
        
        this.setState({fontLoaded: true});
        const deals = await ajax.fetchInitialDeals();
        this.setState({deals});
    };

render() {
    if (!this.state.fontLoaded) {
        return <Loading />
    }
    return (

    <View style={styles.screen}>
        <View>
            <StatusBar
                hidden={true}
            />
        </View>
        <View>
            <Container>
                <Header style={{backgroundColor: "#B75F4B"}} >
                    <Left>
                        <Button transparent style={{marginTop: 10}}>
                            <Title>Best Deals</Title>
                        </Button>
                    </Left>
                    
                    <Right>
                        <Button transparent onPress={()=> Actions.Login()}>
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
        </View>

        <View style={styles.container}>
          
            {
                this.state.deals.length <0 ? (<Loading />) : 
                (<DealList deals={this.state.deals} />)
            }
                   
          
        </View>
    </View>
    );
}
}

const styles = StyleSheet.create({
screen: {
    flex: 1,
},
container: {
    flex:1,
    backgroundColor: '#FCE3D5',
    alignItems: 'center',
    justifyContent: 'center',
},
header:{
    fontSize:40,
}
});
