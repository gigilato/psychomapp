import { Redirect, Slot, SplashScreen } from 'expo-router'
import { ActivityIndicator, LogBox } from 'react-native'
import 'react-native-url-polyfill/auto'

import { useAppLoading } from '$app/appLoading'
import { Screen } from '$atoms'
import { useAuthStore } from '$infra/auth'

LogBox.ignoreLogs(['EventEmitter.removeListener', 'new NativeEventEmitter'])
SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
  const isReady = useAppLoading()
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isReady)
    return (
      <Screen className="justify-center items-center">
        <ActivityIndicator size="large" color="black" />
      </Screen>
    )
  if (!isAuthenticated) return <Redirect href="/sign-in" />

  return <Slot />
}
