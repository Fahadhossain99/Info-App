import { View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from './../theme/spacing';
import { colors } from './../theme/colors';
import { Ionicons } from "@expo/vector-icons";

export default function InfoHeader({backButton=false}) {
  return (
    <View
      style={{
        paddingLeft: spacing[3],
        paddingVertical: spacing[5],
        borderBottomWidth: 1,
        borderColor: colors.black,
      }}
    >
    {backButton && <Ionicons name="arrow-back-circle-sharp" size={24} color="black" /> }
      
      <Text>Student Information</Text>
    </View>
  );
}