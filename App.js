import React from 'react';
import {Font} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Home from './src/components/Home'
import Loading from "./src/components/Loading";




export default class App extends React.Component {
  state = {
    fontLoaded: false,
};


  async componentDidMount() {
    await Font.loadAsync({
        'Roboto_medium': require('./assets/fonts/Roboto_medium.ttf'),
    }
    );
    this.setState({fontLoaded: true})
  }
  render() {
    if(!this.state.fontLoaded){
      return(<Loading />)
    }
    return(
      <Home />
      
    )
  }
}

