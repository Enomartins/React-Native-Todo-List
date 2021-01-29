import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const GoalItem = props =>{
    return(
        <TouchableOpacity onPress= {props.onDelete.bind(this, props.id)} activeOpacity = {0.7}>
            <View style= {styles.listItem}>
                <Text style={{padding: 10}}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create ({
    listItem: {
        marginVertical: 10,
        borderColor: 'white',
        borderWidth: 2
     }
})

export default GoalItem;