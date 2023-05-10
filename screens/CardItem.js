import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function CardItem({title, priority, description}) {
  return (
    <View style={styles.cardContainer}>
        {/* delete button */}
        <View style={styles.deleteButtonContainer}>  
        </View>

        {/* task info */}
        <View style={styles.taskInfoContainer}>
              {/* description */}
              <Text style={styles.textDescription}>Pay for ultility services</Text>
              {/* title */}
              <Text style={styles.textTitle}>Home</Text>
                
              {/* priority */}
              <View style={styles.highPriorityContainer}>
                  <Text style={styles.textPriority}>High</Text>

              </View>
        </View>

        {/* checkbox button */}
        <View style={styles.checkboxContainer}>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    height: '12%',
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius: '10%',
    borderWidth: 0.05
    
  },
  deleteButtonContainer: {
    flex: 2,
    backgroundColor:'red',
    borderRadius: '10%',
    borderWidth: 0.05
  },
  taskInfoContainer: {
    flex: 9,
    borderRadius: '10%',
    borderWidth: 0.05,
    padding: '5%'
  },
  textDescription: {
    fontSize: 20,
    fontWeight: '400'
  },
  textTitle: {
    fontSize: 10,
    fontWeight: '200'
  },
  highPriorityContainer: {
    width: '18%',
    height: '30%',
    borderRadius: '3%',
    borderColor: '#ffd7d5',
    backgroundColor:'#fff1f0',
    justifyContent: 'center',
    alignItems:'center',
    borderWidth: 3,
    marginTop: '8%'
  },
  textPriority: {
    fontSize: 10,
    color: '#f74d56',
    fontWeight:'800'
  },  
  checkboxContainer: {
    flex: 2,
    backgroundColor:'green',
    borderRadius: '10%',
    borderWidth: 0.05
  }
});

export default CardItem;