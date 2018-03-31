import React from 'react'
import { View,  StyleSheet, FlatList} from 'react-native'
import PropTypes from 'prop-types';
import CardItem from './CardItem'

export default class DealList extends React.Component{
    static propTypes = {
        deals: PropTypes.array.isRequired
    };
    render(){
        return(
            <View style={styles.list}>
                <FlatList
                    data={this.props.deals}
                    renderItem={({item}) => <CardItem deal={item} />}
                    keyExtractor={item=> item.id}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        width: '95%',
        marginTop: 60,

    },

});