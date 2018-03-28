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
                <View style={styles.dealBody}>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: deal.media[0]}}/>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.dealTitle}>Titre du deal</Text>
                    <Text style={styles.description}>le contenu le contenu le contenu le contenu le contenu le contenu 
                    le contenu le contenu le contenu le contenu le contenule contenu le contenu</Text>
                </View>
            </View>
                

                <View style={styles.callToAction}>
                    <View style={styles.buttonContainer}>

                    <Button transparent bordered dark>
                        <Text style={styles.voirBonBtn}> Voir le bon plan </Text>
                    </Button>
                     
                    </View>

                    <View style={styles.priceContainer}>
                        
                        <Text style={styles.price}>1.80€ </Text>
                        
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    deal: {
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius:5,
        elevation: 1,
        
    },
    dealBody:{
        flexDirection: 'row',
        flex:1,
    },
    imageContainer:{
        flex:1,
        marginHorizontal: 5,
        marginBottom:5,
        marginTop:5,
    },
    image: {
        width: '100%',
        height: 80,
        backgroundColor: '#ccc',
        marginTop:40,
    },
    contentContainer: {
        flex:3,
        marginHorizontal: 8,
        marginBottom:5,
        marginTop:5,
    },
    dealTitle:{
        fontSize:25,
        color: '#B75F4B',
        
    },
    callToAction: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 120,
        paddingBottom: 15,
    },
    voirBonBtn:{
        paddingHorizontal:10,
        
    },
    priceContainer:{
        backgroundColor: '#DDFDF6',
        marginRight: 10,
        borderColor: '#338472',
        borderWidth: 0.5,
        
    },
    price:{
        paddingTop:5,
        paddingHorizontal:6,
        color: '#338472',
        fontSize: 22,
        fontWeight: 'bold'
    }


});
