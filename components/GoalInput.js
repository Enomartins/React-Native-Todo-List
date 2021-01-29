import React, { useState } from 'react'
import { View, TextInput, Button, Modal, StyleSheet} from 'react-native'

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [visi, setVisi] = useState(false);

    function goalInputHandler(enteredText){
        setEnteredGoal(enteredText);
     }


    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputcontainer}>
                    <TextInput
                        placeholder="Type here"
                        style= {styles.input}
                        onChangeText = {goalInputHandler}
                        value = {enteredGoal} />
                    <Button title="ADD" onPress = {props.onAddGoal.bind(this, enteredGoal)}/>
                </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        width: '70%'
    },
    inputcontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default GoalInput;