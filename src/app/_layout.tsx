import 'intl-pluralrules'
import 'react-native-url-polyfill/auto'

import { Toasts } from '@backpackapp-io/react-native-toast'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { LogBox, ActivityIndicator } from 'react-native'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { useAppLoading } from '$app/appLoading'
import { Screen } from '$atoms'

LogBox.ignoreLogs(['EventEmitter.removeListener', 'new NativeEventEmitter'])
SplashScreen.preventAutoHideAsync()

const queryClient = new QueryClient()

export default function AppLayout() {
  const isReady = useAppLoading()

  if (!isReady)
    return (
      <Screen className="justify-center items-center">
        <ActivityIndicator size="large" color="black" />
      </Screen>
    )

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <BottomSheetModalProvider>
            <Stack screenOptions={{ headerShown: false }} />
            <StatusBar style="light" />
            <Toasts />
          </BottomSheetModalProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
