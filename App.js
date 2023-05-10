import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CardItem from './screens/CardItem';
import TodoListScreen from './screens/TodoListScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <CardItem></CardItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
