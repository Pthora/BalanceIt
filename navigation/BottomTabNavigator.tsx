import { AntDesign as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/Home'
import LoginScreen from '../screens/Login'
import ChatScreen from '../components/NewChatbot';
import PlayScreen from '../screens/Play'
import FeedbackScreen from '../screens/Feedback'
import AudioScreen from '../screens/AudioList'
import SettingsScreen from '../screens/Settings'
import StatsScreen from '../screens/Stats'
import AboutPage from '../screens/Settings/About'
import { AudioParamList, BottomTabParamList, HomeParamList, SettingsParamList, StatsParamList,ChatParamList,LoginParamList } from '../types'
import AudioList from '../screens/AudioList'
import Feedback from '../screens/Feedback'
import PlayerControls from '../screens/Play/PlayerControls'
import { stringify } from 'uuid'
import NewChatApp from '../components/NewChatbot'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Login"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}
    >
      
      {/* <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}
    >
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      /> */}
   <BottomTab.Screen
        name="Login"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="setting" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="android" color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={25} style={styles.tabBarIcon} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>()

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      >
        <HomeStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: 'Login',
          }}
        />
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
          }}
        />
        <HomeStack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{
            headerBackTitle: 'Back',
            headerTitle: 'Play',
          }}
        />
        <HomeStack.Screen
          name="AudioScreen"
          component={AudioScreen}
          options={{
            headerTitle: 'AudioScreen',
          }}
        />
          <HomeStack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            headerTitle: 'FeedbackScreen',
          }}
        />
         
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

const StatsStack = createStackNavigator<StatsParamList>()

function StatsNavigator() {
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          headerTitle: 'Stats',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </StatsStack.Navigator>
  )
}

const ChatStack = createStackNavigator<ChatParamList>()

function ChatNavigator() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerTitle: 'Chat',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </ChatStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Settings',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
      <SettingsStack.Screen
        name="AboutScreen"
        component={AboutPage}
        options={{
          headerBackTestID: 'headerBack',
          headerTintColor: Colors.light.white,
          headerBackTitle: 'Back',
          headerTitle: 'About',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SettingsStack.Navigator>
  )
}

const AudioStack = createStackNavigator<AudioParamList>()

function AudioNavigator() {
  return (
    <AudioStack.Navigator>
      <AudioStack.Screen
        name="AudioScreen"
        component={AudioList}
        options={{
          headerTitle: 'Audio',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </AudioStack.Navigator>
  )
}

const LoginStack = createStackNavigator<LoginParamList>()

function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerTitle: 'Login',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </LoginStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: Colors.light.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
})
