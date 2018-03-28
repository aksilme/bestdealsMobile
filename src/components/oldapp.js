import React from 'react';
import {Font} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import ajax from './src/ajax'
import DealList from './src/components/DealList';
import HeaderBase from './src/components/HeaderBase'
import Loader from "./src/components/Spinner";



export default class App extends React.Component {
    state = {
        deals: [],
        fontLoaded: false,
    };


    async componentDidMount() {
        await Font.loadAsync({
                'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
            }
        );
        this.setState({fontLoaded: true});
        const deals = await ajax.fetchInitialDeals();
        this.setState({deals});
    };

    render() {
        if (!this.state.fontLoaded) {
            return <Text>Chargement</Text>
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
                    {
                        this.state.deals.length > 0?
                            ( <DealList deals={this.state.deals} />):
                            (<Loader/>)
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
