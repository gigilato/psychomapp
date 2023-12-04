import { useRef } from 'react'
import { TextInput } from 'react-native'

import { Screen } from '$atoms'
import { EmailInput, PasswordInput } from '$forms'
import { Button, PressableText } from '$molecules'

export const SignInScreen = () => {
  const passwordRef = useRef<TextInput>(null)
  return (
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
  )
}
