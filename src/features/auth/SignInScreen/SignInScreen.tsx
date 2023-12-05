import { useRef } from 'react'
import { TextInput } from 'react-native'

import { HStack, Image, Screen, Text } from '$atoms'
import { EmailInput, PasswordInput } from '$forms'
import { signInAsync } from '$infra/auth'
import { Button, PressableText } from '$molecules'

export const SignInScreen = () => {
  const passwordRef = useRef<TextInput>(null)
  return (
    <Screen className="px-l pt-[100]">
      <HStack className="self-center items-center mb-xl">
        <Image source="logo" height={50} />
        <Text className="ml-s">
          <Text variant="title" className="text-primary-classic">
            Psychom'
          </Text>
          <Text variant="title" className="text-primary-strong">
            App
          </Text>
        </Text>
      </HStack>
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
      <Button
        ID="SignIn"
        title="Se connecter"
        className="mt-xl"
        onPress={() => {
          signInAsync('loismartinez.7@gmail.com', 'azerty')
        }}
      />
    </Screen>
  )
}
