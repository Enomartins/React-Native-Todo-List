import React, {useState} from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [
        ...currentGoals,
        {key: Math.random().toString(), goal: enteredGoal}
    ])
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals =>{
        return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }

  return (
    <View style= {styles.screen}>
        <Button title="Add more Goals" onPress={() => setIsAddMode(true)} />
        <GoalInput
            onAddGoal = {addGoalHandler}
            showModal={isAddMode}
        />
      
        <FlatList data={courseGoals} renderItem = {itemData => //Read up keyExtractor prop of flatlist
            <GoalItem
                title={itemData.item.goal}
                id = {itemData.item.key}
                onDelete ={removeGoalHandler}
            />
        } />
          

      
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    backgroundColor: 'purple'
  }
});
