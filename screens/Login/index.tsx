import React, { useCallback, useState } from 'react'
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
import { Button, Text } from 'react-native'

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
    navigation.navigate('HomeScreen')
  }

  const onLogoutSuccess = useCallback(() => {
    setProfile(null)
    setProvider('')
    //alert('logout success');
  }, [])

  const onLogout = useCallback(() => {}, [])

  return (
    <>
      {provider != null ? ( profile !=null ? (<User provider={provider} profile={profile} onLogout={onLogout} />):null) :null}
      <div className={`App ${provider && profile ? 'hide' : ''}`}>
        <Text>ReactJS Social Login</Text>

        <Button
          onPress={onPressLearnMore}
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

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
