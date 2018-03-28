import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { StyleSheet, View } from 'react-native'
export default class Loading extends Component {
render() {
    return (
    <View style={styles.loadingContainer}>

            <Spinner color="#646464" />
    </View>
    );
}
}

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1, 
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCE3D5',
    },
    
})