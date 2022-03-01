import { Pressable, StatusBar, View ,FlatList} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { colors } from './../theme/colors';
import InfoHeader from '../components/Info-header';
import { SafeAreaView } from 'react-native-safe-area-context';


export const STUDENT_LIST = [
  {
    name: "Fahad",
    description:
      "I am Fahad. I am from Dhaka.I am a student of Dhaka International University.",
    image: require("../../assets/Fahad.jpg"),
  },
  {
    name: "Sanjida",
    description:
      "I am Sanjida. I am from Dhaka.  I am a student of Eden Collage.",
    image: require("../../assets/Sanjida.jpg"),
  },
  {
    name: "Marzan",
    description:
      "I am marzan. I am from Bogura.I am a student of Dhaka International University.",
    image: require("../../assets/Marzan .jpg"),
  },
  {
    name: "Saadman",
    description:
      "I am Saadman. I am from Spain.I am a student of Dhaka International University.",
    image: require("../../assets/Saadman.jpg"),
  },
  {
    name: "Bapp",
    description:
      "I am marzan. I am from Dhaka.I am a student of Dhaka International University.",
    image: require("../../assets/Bappy .jpg"),
  },
];

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: colors.offwhite, flex: 1 }}>
     <InfoHeader/>
     <Pressable onPress={() => navigation.navigate("Details")}>
<Text> Details page </Text>
     </Pressable>
     <StatusBar backgroundColor={colors.black} barStyle='light-content'/>
    </SafeAreaView>
  );
}