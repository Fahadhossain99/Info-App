import { Pressable, View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from './../theme/colors';
import InfoHeader from '../components/Info-header';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: colors.offwhite, flex: 1 }}>
     <InfoHeader/>
     <Pressable onPress={() => navigation.navigate("Details")}>
<Text> Details page </Text>
     </Pressable>
    </SafeAreaView>
  );
}