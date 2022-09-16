import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../types'



interface Props {
  navigation: StackNavigationProp<HomeParamList, 'FeedbackScreen'>
  
}

export default function Feedback({
    navigation
  }: Props) {
   
  return (
    <View >
        <Text>123</Text>
    </View>
  )
}
