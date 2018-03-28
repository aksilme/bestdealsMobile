import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
class Header extends Component {
render() {
return (
    <View style={styles.container}>
        <View style={styles.navBar}>
            <Image source={require('../../assets/youtube_social_icon_red.png')} style={{height:40, width:98}}/>
            <View style={styles.righNav}>
                <Icon name="search" size={25} />
            </View>
        </View>
    </View>
    );
}
}

const styles= StyleSheet.create({
    container: {

    },
    navBar:{
        backgroundColor: '#B75F4B',
        height: 60,
        elevation:3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});
export default Header