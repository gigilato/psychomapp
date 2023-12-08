import { Toasts } from '@backpackapp-io/react-native-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <KeyboardProvider>
          <Slot />
          <StatusBar style="auto" />
          <Toasts />
        </KeyboardProvider>
      </SafeAreaProvider>
    </QueryClientProvider>
  )
}
