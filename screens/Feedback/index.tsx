import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Button } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../types'


interface Props {
  positionTime: string
  durationTime: string
  isPlaying: boolean
  navigation: StackNavigationProp<HomeParamList, 'FeedbackScreen'>
  pause: () => void
  play: () => void
  replay: () => void
  forward: () => void
}

export default function Feedback({
    navigation
  }: Props) {
  return (
    <View >
        <Text></Text>
    </View>
  )
}
