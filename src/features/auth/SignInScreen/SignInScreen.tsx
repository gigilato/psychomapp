import { HStack, Image, Screen, Text } from '$atoms'

import { SignInForm } from './components'

export const SignInScreen = () => {
  return (
    <Screen className="px-l pt-[100]">
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
      <SignInForm className="mt-xl" />
    </Screen>
  )
}
