import React from 'react';
import Collapsible from 'react-collapsible';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import '../assets/css/collapseList.css'

const CollapseApp = () => {
  return (
    <>
    <View>
    <Collapsible  trigger="Day 1">
      <p>
        LENS
      </p>
      <p>
        Quest
      </p>
    </Collapsible>
    <Collapsible  trigger="Day 1">
      <p>
        LENS
      </p>
      <p>
        Quest
      </p>
    </Collapsible>
    <Collapsible  trigger="Day 1">
      <p>
        LENS
      </p>
      <p>
        Quest
      </p>
    </Collapsible>
    <Collapsible  trigger="Day 1">
      <p>
        LENS
      </p>
      <p>
        Quest
      </p>
    </Collapsible>
    <Collapsible  trigger="Day 1">
      <p>
        LENS
      </p>
      <p>
        Quest
      </p>
    </Collapsible>
    </View>
  </>
  );
};

export default CollapseApp;