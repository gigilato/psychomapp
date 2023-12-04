import { Slot } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { LogBox } from 'react-native'
import 'react-native-url-polyfill/auto'
import { SafeAreaProvider } from 'react-native-safe-area-context'

LogBox.ignoreLogs(['EventEmitter.removeListener', 'new NativeEventEmitter'])
SplashScreen.preventAutoHideAsync()

export default function AppLayout() {
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  )
}
