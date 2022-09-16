import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet, FlatList, Button } from 'react-native'
import { Card, Paragraph } from 'react-native-paper'
import Screen from '../../components/Screen'

import DownloadButton from '../../components/DownloadButton'

import { Text, useThemeColor } from '../../components/Themed'
import Colors from '../../constants/Colors'
import { meditations, MeditationItem } from '../../data/meditations'
import { HomeParamList } from '../../types'
import { useAppSelector } from '../../hooks'
import { selectFavourites } from '../../redux/selectors'
import Collapsible from 'react-collapsible';
import '../../assets/css/collapseList.css'


interface Props {
  navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>
}



export default function Home({ navigation }: Props) {


  return (
      <>
      <Collapsible  trigger="Day 1">
        <Text onPress={() =>
          navigation.navigate('AudioScreen', {id: '1'}  )}>
          LENS
        </Text>
        <p>
          Quest
        </p>
      </Collapsible>
      <Collapsible  trigger="Day 2">
        <p>
          LENS
        </p>
        <p>
          Quest
        </p>
      </Collapsible>
      <Collapsible  trigger="Day 3">
        <p>
          LENS
        </p>
        <p>
          Quest
        </p>
      </Collapsible>
      <Collapsible  trigger="Day 4">
        <p>
          LENS
        </p>
        <p>
          Quest
        </p>
      </Collapsible>
      <Collapsible  trigger="Day 5">
        <p>
          LENS
        </p>
        <p>
          Quest
        </p>
      </Collapsible>
    </>
    );
}