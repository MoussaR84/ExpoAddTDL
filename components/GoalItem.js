import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList,TouchableOpacity } from 'react-native';




const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
                 <View style={styles.listItem}>
            <Text>{props.title}</Text>
              </View>
        </TouchableOpacity>
       
    )
}


const styles = StyleSheet.create({
 listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical:10,
  },
});


export default GoalItem 
