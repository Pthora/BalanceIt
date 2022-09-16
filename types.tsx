/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type NO_PARAMS = undefined
export type RootStackParamList = {
  Root: NO_PARAMS
  NotFound: NO_PARAMS
  AudioScreen : NO_PARAMS
}

export type MainStackParamList = {
  Main: NO_PARAMS
  CompletedScreen: NO_PARAMS
}

export type BottomTabParamList = {
  Home: NO_PARAMS
  Stats: NO_PARAMS
  Settings: NO_PARAMS
  Login: NO_PARAMS
  AudioList: NO_PARAMS
  Feedback : NO_PARAMS
}

export type HomeParamList = {
  HomeScreen: NO_PARAMS
  PlayScreen: {
    id: string
  },
  AudioScreen: {
    id: string
  },
  PlayerControl: {
    id: string
  },
  FeedbackScreen: {
    id: string
  }
  LoginScreen: NO_PARAMS
}

export type AudioParamList = {
  AudioScreen: {
    id: string
  }

}

export type StatsParamList = {
  StatsScreen: NO_PARAMS
}

export type SettingsParamList = {
  SettingsScreen: NO_PARAMS
  AboutScreen: NO_PARAMS
}
