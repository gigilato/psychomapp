import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'

import { Screen } from '$atoms'
import { SignInScreen } from '$features/auth'

import { useAppLoading } from './appLoading'

const LoadingScreen = () => (
  <Screen className="justify-center items-center">
    <ActivityIndicator size="large" color="black" />
  </Screen>
)
export const App = () => {
  const isReady = useAppLoading()
  return (
    <>
      {isReady ? <SignInScreen /> : <LoadingScreen />}
      <StatusBar style="auto" />
    </>
  )
}
