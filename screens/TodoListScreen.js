import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text } from 'react-native';

function TodoListScreen(props) {
  const [todayDate, setTodayDate] = useState('')
  useEffect(() => {
    const date = new Date().toLocaleDateString('en-US');
    setTodayDate(date);
  })
  return (
    <View 
      style={styles.container}>
        {/* title */}
        <View style={styles.titleContainer}>
            <Text style={styles.titleStyle}>Todos</Text>
            <Text style={styles.todayDateStyle}>{todayDate}</Text>

        </View>

        {/* todolist */}
        <View style={styles.todoListContainer}>
        </View>

        {/* additembutton */}
        <View style={styles.addItemButtonContainer}></View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#d3d3d3'

  },
  titleContainer: {
    //backgroundColor: 'red',
    flex: 2,
    justifyContent:'flex-end',
    left:'7%'
  },
  titleStyle: {
    fontSize: 50,
    fontWeight: '500',

  },
  todayDateStyle: {
    fontSize: 20,
    fontWeight:'100'
  },



  todoListContainer: {
    backgroundColor:'blue',
    flex: 8
  },
  addItemButtonContainer: {
    backgroundColor: 'green',
    flex: 2
  }
});

export default TodoListScreen;