import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { Button} from 'native-base';
import PropTypes from 'prop-types';
import {priceDispaly} from '../utils'

export default class CardItem extends React.Component{
    static propTypes = {
        deal: PropTypes.object.isRequired
    };
    render(){
        const {deal} = this.props;
        return(
            <View style={styles.deal}>
                <View style={styles.imageBLock}>
                    <Image style={styles.image} source={{uri: 'https://t4.ftcdn.net/jpg/00/39/07/33/240_F_39073382_ClOPPvXfK2gLYSG0KQgN3w299x2txiaz.jpg'}}/>
                </View> 

                <View style={styles.contentBLock}>
                    <Text style={styles.dealTitle}>titre du deal</Text>
                    <Text style={styles.description}>le contenu le contenu le contenu le contenu le contenu le contenu 
                    le contenu le contenu le contenu le contenu le contenule contenu le contenu</Text>
                    <View style={styles.callToAction}>
                        <Button transparent bordered dark>
                            <Text style={styles.voirBonBtn}> Voir le bon plan </Text>
                        </Button>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>{ priceDispaly(22) }</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deal:{
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 10,
    },
    imageBLock:{
        flex:1,
        marginHorizontal: 5,
        marginBottom:5,
        marginTop:5,
    },
    contentBLock:{
        flex:3,
        marginHorizontal: 5,
        marginBottom:5,
        marginTop:5,
    },
    image:{
        height: 80,
        width: 80,
        marginTop: '10%',
    },
    dealTitle:{
        fontSize:25,
        color: '#B75F4B',
        fontWeight: 'bold',
    },
    callToAction: {
        flex:1,
        flexDirection: 'row',
        marginTop:5,
        marginBottom:5
    },
    
    voirBonBtn:{
        paddingHorizontal:20,
    },
    priceContainer:{
        backgroundColor: '#DDFDF6',
        marginRight: 10,
        borderColor: '#338472',
        borderWidth: 0.5,
        marginLeft:10,
    },
    price:{
        paddingTop: 10,
        paddingHorizontal:6,
        color: '#338472',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems:'center'
    }
})

