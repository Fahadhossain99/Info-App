import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import { typography } from './src/theme';
import Text from './src/components/text/text';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/screens/Home';
import Details from './src/screens/Details';
import React from "react";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
   const [loaded] = useFonts({
    'Antonio-Medium':require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold':require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular':require('./assets/fonts/Spartan-Regular.ttf'),
   });

   if (!loaded) {
     return <ActivityIndicator/>
   } else{
return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
    <StatusBar barStyle="Light" />
  </NavigationContainer>
);
 }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
