import React, { Componenet } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class Login extends Componenet{
    render(){
        return(
            <View style={loginContainer}>
                <Text>Login screen</Text>
            </View>
        )
    }
}

const stykes = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})