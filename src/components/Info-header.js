import { View } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from './../theme/spacing';
import { colors } from './../theme/colors';

export default function InfoHeader() {
  return (
    <View style={{paddingLeft:spacing[3],paddingVertical:spacing[5],borderBottomWidth:1,borderColor:colors.black}}>
      <Text>Student Information</Text>
    </View>
  )
}