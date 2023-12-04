import { StatusBar } from 'expo-status-bar'
import { useRef } from 'react'
import { ActivityIndicator, TextInput } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Screen } from '$atoms'
import { EmailInput, PasswordInput } from '$forms'
import { Button, PressableText } from '$molecules'

import { useAppLoading } from './infra/appLoading'

const LoadingScreen = () => (
  <Screen className="justify-center items-center">
    <ActivityIndicator size="large" color="black" />
  </Screen>
)
const AppContent = () => {
  const isReady = useAppLoading()
  const passwordRef = useRef<TextInput>(null)
  return (
    <>
      {isReady ? (
        <Screen className="justify-center px-l">
          <EmailInput
            ID="signIn/email"
            label="Email"
            placeholder="Votre email"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <PasswordInput
            className="mt-s"
            ID="signIn/password"
            label="Mot de passe"
            placeholder="Votre mot de passe"
            ref={passwordRef}
          />
          <PressableText variant="link" ID="forgotPassword" className="mt-s self-end">
            Mot de passe oublié ?
          </PressableText>
          <Button ID="SignIn" title="Se connecter" className="mt-xl" />
        </Screen>
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
