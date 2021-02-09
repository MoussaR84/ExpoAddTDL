
import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, ScrollView, FlatList,Modal } from 'react-native';



const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("");
    
   const goalInputHandler=(enteredText)=> {
    setEnteredGoal(enteredText);
    }; 
    
    const addGoalHandler=() => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    }
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    
        <Button title="CANCELED" color="red" onPress={ props.onCancel}/>
                    <Button title="ADD" onPress={addGoalHandler} />
                    </View>
        </View>
       </Modal>
    )
}


const styles = StyleSheet.create({
  
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    
    },
    input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    },
    buttonContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        width:"60%",
    },
});


export default GoalInput 
