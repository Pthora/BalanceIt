import * as React from 'react'
import { StyleSheet } from 'react-native'

import PlayerIcon from '../PlayerIcon'
import { View, Text } from '../../../components/Themed'
import { Button } from 'react-native-paper'
import { StackNavigationProp } from '@react-navigation/stack'
import { HomeParamList } from '../../../types'
import { Alert, Modal, Pressable} from "react-native";
import { useState } from "react";

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

const moodDetails = {
  mood0: {
    display: "😣",
    details: ["Sad", "Stressed", "Anxious"],
  },
  mood1: {
    display: "😞",
    details: ["Sad", "Stressed", "Anxious"],
  },
  mood2: {
    display: "😑",
    details: ["Indifferent", "Board", "Numb"],
  },
  mood3: {
    display: "🙂",
    details: ["Happy", "Relaxed", "Satisfied"],
  },
  mood4: {
    display: "😃",
    details: ["Happy", "Relaxed", "Satisfied"],
  },
};


const gridContainerStyles = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  backgroundColor: "#2196F3",
  padding: "10px",
};
const gridItemStyles = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  border: "1px solid rgba(0, 0, 0, 0.8)",
  padding: "20px",
  fontSize: "30px",
  textAlign: "center",
};

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
  const [modalVisible, setModalVisible] = React.useState(false);
  const [mood, setMood] = useState({
    display: "😣",
    details: ["Sad", "Stressed", "Anxious"],
  });

  function handleChange(e) {
    const val = e.target.value;
    if (val < 25) {
      setMood(moodDetails.mood0);
    } else if (val >= 25 && val < 50) {
      setMood(moodDetails.mood1);
    } else if (val >= 50 && val < 70) {
      setMood(moodDetails.mood2);
    } else if (val >= 75 && val < 90) {
      setMood(moodDetails.mood3);
    } else if (val > 90) {
      setMood(moodDetails.mood4);
    }
  }
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <p>How do you feel about this audio?</p>
      <div className="emoji">
        <div
          style={{
            position: "relative",
            bottom: "-50px",
            fontSize: "100px",
            transition: "ease-in-out",
          }}
        >
          <input
            style={{ width: "-webkit-fill-available" , position:"relative"}}
            type="range"
            list="tickmarks"
            onChange={handleChange}
          />
        </div>
        <datalist id="tickmarks">
          <option value="preserving face" label="😣"></option>
          <option value="pensive face" label="😞"></option>
          <option value="expressionless face" label="😑"></option>
          <option value="slightly smiling face" label="🙂"></option>
          <option value="grinning face with big eyes" label="😃"></option>
        </datalist>
        <p style={{marginBottom: "60", textAlign: "center" }}>{mood.display}</p>
      </div>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>

            </Pressable>
          </View>
        </View>
      </Modal>
    <Button onPress={() => setModalVisible(true)} >
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    marginBottom: 300,
  },
  modalView: {
    margin: 50,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 70,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
