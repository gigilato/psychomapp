import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Screen, Center, Text } from '$atoms'

import { useAppLoading } from './infra/appLoading'

const LoadingScreen = () => (
  <Screen className="justify-center items-center">
    <ActivityIndicator size="large" color="black" />
  </Screen>
)
const AppContent = () => {
  const isReady = useAppLoading()
  return (
    <>
      {isReady ? (
        <Center className="flex-1">
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </Center>
      ) : (
        <LoadingScreen />
      )}
      <StatusBar style="auto" />
    </>
  )
}

export const App = () => {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  )
}
