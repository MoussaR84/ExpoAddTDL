import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button, ScrollView, FlatList } from 'react-native';
import GoaldItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput";

 const App = ()=> {
   const [courseGoal, setCourseGoal] = useState([]);
   const [addNewModal, setAddNewModal] = useState(false);

  

  const addGoalHandler = (GoalTitle) => {
    setCourseGoal(currentGoal =>
      [
      ...currentGoal,
      { id : Math.random().toString(), value: GoalTitle }
      ]);
    setAddNewModal(false);
  };

   
   const removeGoalHandler = (goalId) => {
     setCourseGoal(currentGoal => {
       return currentGoal.filter((goal) => goal.id !== goalId);
     })
   };
   const cancelGoalAddition = () => {
     setAddNewModal(false);
    }
  

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() =>setAddNewModal(true) }/>
      <GoalInput visible={addNewModal} onAddGoal={addGoalHandler} onCancel={cancelGoalAddition}/>
      <FlatList
        keyExtractor={(item,index)=>item.id}
        data={courseGoal}
        renderItem={itemData => (<GoaldItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value}/>)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
});


export default App