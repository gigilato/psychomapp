import { Center, Image, KeyboardAvoidingView, Screen, Text } from '$atoms'
import { i18n } from '$infra/i18n'
import { Header } from '$views/navigation'

import { SignInForm } from './components'

export const SignInScreen = () => {
  return (
    <KeyboardAvoidingView variant="screen">
      <Screen>
        <Header className="items-center justify-center flex-row">
          <Image source="logo" height={50} />
          <Text className="ml-s">
            <Text variant="title" className="text-white-light">
              {i18n.t('common.appName')}
            </Text>
          </Text>
        </Header>
        <SignInForm shadow className="mx-l mt-xl p-m rounded-m" />
        <Center className="flex-1">
          <Image source="autism-table" height={120} />
        </Center>
      </Screen>
    </KeyboardAvoidingView>
  )
}
