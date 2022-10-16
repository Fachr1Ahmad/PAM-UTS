import Stopwatch from './components/Stopwatch';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Stopwatch/>
      <Text style={{fontFamily: "Helvetica Neue" ,marginLeft: 20, marginRight: 20, color: 'white'}}>StopWatch Untuk Lari</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
