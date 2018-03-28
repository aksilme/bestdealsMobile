import React from 'react';
import {Font} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ajax from '../ajax'
import DealList from './DealList';
import HeaderBase from './HeaderBase'
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
            <HeaderBase backgroundColor="#B75F4B"/>
        </View>

        <View style={styles.container}>
        
            <DealList deals={this.state.deals} />
        
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
