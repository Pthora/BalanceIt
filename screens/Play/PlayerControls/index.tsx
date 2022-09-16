import * as React from 'react'
import { StyleSheet } from 'react-native'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'
import { Button } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../../types'

interface Props {
  positionTime: string
  durationTime: string
  isPlaying: boolean
  navigation: StackNavigationProp<HomeParamList, 'PlayerControl'>
  pause: () => void
  play: () => void
  replay: () => void
  forward: () => void
}

export default function PlayerControls({
  positionTime,
  durationTime,
  isPlaying,
  pause,
  play,
  replay,
  forward,
  navigation
}: Props) {
  return (
    <View style={styles.controls}>
      <Text>{positionTime}</Text>
      <PlayerIcon name="replay-10" onPress={replay} size={30} />
      {isPlaying ? (
        <PlayerIcon name="pause-circle-filled" onPress={pause} />
      ) : (
        <PlayerIcon name="play-circle-filled" onPress={play} />
      )}
      <PlayerIcon name="forward-10" onPress={forward} size={30} />
      <Text>{durationTime}</Text>
    <Button onPress={() => navigation.navigate('FeedbackScreen', {id: '2'})} >
        Next
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})
