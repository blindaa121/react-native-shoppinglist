import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Icon.loadFont();

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon name='remove' size={20} color='firebrick' 
                    onPress={() => deleteItem(item.id)}/>
            </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: 'lightgrey',
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 20
    }
})

export default ListItem

