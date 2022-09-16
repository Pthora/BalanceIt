import React, { useCallback, useState } from 'react'
import { Alert, Modal, Pressable, View } from "react-native";
import { User } from './User'
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
  LoginSocialApple,
  IResolveParams,
} from 'reactjs-social-login'

import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
  AppleLoginButton,
} from 'react-social-login-buttons'
import { HomeParamList } from '../../types'
import { StackNavigationProp } from '@react-navigation/stack'
import { Button, StyleSheet, Text, TextInput } from 'react-native'

interface Props {
  navigation: StackNavigationProp<HomeParamList, 'LoginScreen'>
}
const REDIRECT_URI = 'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login'
// const REDIRECT_URI = 'http://localhost:3000/account/login'

function Login({ navigation }: Props) {
  const [provider, setProvider] = useState('')
  const [profile, setProfile] = useState<any>()

  const onLoginStart = useCallback(() => {
    // alert('login start');
  }, [])

  const onPressLearnMore = () => {
    if(username=="admin" && password=="admin")
      navigation.navigate('HomeScreen')
    else
      setModalVisible(true)
  }

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    //alert('logout success');
  }, [])

  const onLogout = useCallback(() => {}, [])

  const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10
    },
    baseHeader: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 20,
      height: 40,
      margin: 12,
      padding: 10
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    },
    default: {
      height: 20,
      width: 20
    },
    baseDiv: {
      alignItems: 'center'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
    modalText: {
      marginBottom: 15,
      textAlign: "center"
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
    }
  });
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      {provider != null ? ( profile !=null ? (<User provider={provider} profile={profile} onLogout={onLogout} />):null) :null}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
          <Text style={styles.baseHeader}>BalanceIt Login</Text><br/>
          <Text style={styles.default}>Username : </Text>
          <TextInput style={styles.baseText} value={username} onChangeText={setUsername}></TextInput><br/>
          <Text style={styles.default}>Password : </Text>
          <TextInput secureTextEntry={true} style={styles.baseText} value={password} onChangeText={setPassword}></TextInput><br/>
          <Button 
              onPress={onPressLearnMore}
              title="Login"
              color="#FFA500"
              accessibilityLabel="Learn more about this purple button"
            />
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(false);
            }}
          >
            <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Wrong Password!</Text>
            <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(false)}>
            <Text style={styles.textStyle}>Close</Text>
      </Pressable>
          </View>
        </View>
      </Modal>

        <LoginSocialFacebook
          appId={process.env.REACT_APP_FB_APP_ID || ''}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err) => {
            console.log(err)
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          client_id={process.env.REACT_APP_GG_APP_ID || ''}
          onLoginStart={onLoginStart}
          redirect_uri={REDIRECT_URI}
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err) => {
            console.log(err)
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>



        <LoginSocialMicrosoft
          client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }: IResolveParams) => {
            setProvider(provider)
            setProfile(data)
          }}
          onReject={(err: any) => {
            console.log(err)
          }}
        >
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

      </div>
    </>
  )
}

export default Login
