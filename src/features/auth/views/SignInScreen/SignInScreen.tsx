import { Center, HStack, Image, KeyboardAvoidingView, Screen, Text } from '$atoms'
import { Header } from '$features/navigation/views'
import { i18n } from '$infra/i18n'

import { SignInForm } from './components'

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView variant="screen">
      <Screen>
        <Header>
          <HStack className="flex-1 items-center justify-center">
            <Image source="logo" height={50} />
            <Text className="ml-s">
              <Text variant="title" className="text-white-light">
                {i18n.t('common.appName')}
              </Text>
            </Text>
          </HStack>
        </Header>
        <SignInForm shadow className="mx-l mt-xl p-m rounded-m" />
        <Center className="flex-1">
          <Image source="autism-table" height={120} />
        </Center>
      </Screen>
    </KeyboardAvoidingView>
  )
}
