import { View } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import { SafeAreaView } from 'react-native-safe-area-context'
import InfoHeader from '../components/Info-header'
import { colors } from './../theme/colors';

export default function Details() {
  return (
    <SafeAreaView style={{backgroundColor:colors.offwhite,flex:1}}>
      <InfoHeader/>
    </SafeAreaView>
  )
}