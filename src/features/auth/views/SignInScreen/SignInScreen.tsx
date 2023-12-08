import { HStack, Image, KeyboardAvoidingView, Screen, Text } from '$atoms'

import { SignInForm } from './components'

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView variant="screen">
      <Screen className="px-l pb-[150] justify-end">
        <HStack className="self-center items-center">
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
        <SignInForm className="mt-xl bg-white shadow shadow-shadowColor p-m rounded-m" />
      </Screen>
    </KeyboardAvoidingView>
  )
}
