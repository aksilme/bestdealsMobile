import React from 'react';
import {Font} from 'expo';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'
import Home from './src/components/Home'
import Login from './src/components/screens/Login'
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
      <Router >
        <Scene key="root">
          <Scene key="Home" component={Home} title="home" hideNavBar={true}   />
          <Scene key="Login" component={Login} title="login" hideNavBar={true}  initial/>
        </Scene>

      </Router>
      
    )
  }
}

