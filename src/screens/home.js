import {
  Pressable,
  StatusBar,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from 'react'
import Text from '../components/text/text'
import { colors } from './../theme/colors';
import InfoHeader from '../components/Info-header';
import { SafeAreaView } from 'react-native-safe-area-context';
import { spacing } from './../theme/spacing';
// import { TouchableOpacity } from "react-native-web";


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
    name: "Bappy",
    description:
      "I am marzan. I am from Dhaka.I am a student of Dhaka International University.",
    image: require("../../assets/Bappy .jpg"),
  },
];

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: spacing[12],
    borderBottomColor: colors.black,
    justifyContent: "space-between",
  },
  txtStyle: {
    fontSize: 26,
    fontStyle: "italic",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 8,
    borderRadius: 25,
    margin: 10,
    backgroundColor: "#FFFDD0",
  },
});
export default function Home({navigation}) {
  const renderItem = ({item,index}) =>{
     const { name } = item;
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Details",{topic:item})} style={styles.viewStyle}>
        <View>
          <Text style={styles.txtStyle}> {name} </Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={{ backgroundColor: colors.offwhite, flex: 1 }}>
      <InfoHeader />
      <FlatList 
      data={STUDENT_LIST}
      renderItem={renderItem}
      keyExtractor={(item,index)=>item.name}
      contentContainerStyle={{margin:spacing[5]}}

      />
      <StatusBar backgroundColor={colors.black} barStyle="light-content" />
    </SafeAreaView>
  );
}