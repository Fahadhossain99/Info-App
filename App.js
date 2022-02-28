import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import { typography } from './src/theme';

export default function App() {
   const [loaded] = useFonts({
    'Antonio-Medium':require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold':require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular':require('./assets/fonts/Spartan-Regular.ttf'),
   });
  return (
    <View style={styles.container}>
      <Text style={{fontFamily:typography.bold}} >Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
