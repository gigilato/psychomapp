import { Canvas, Skia, Path } from '@shopify/react-native-skia'
import { useWindowDimensions } from 'react-native'

import { Center, HStack, Image, KeyboardAvoidingView, Screen, Text } from '$atoms'
import { colors } from '$theme'

import { SignInForm } from './components'

const height = 250
export const SignInScreen = () => {
  const { width } = useWindowDimensions()
  const path = Skia.Path.Make()
  path.moveTo(0, 0)
  path.lineTo(0, height * 0.75)
  path.cubicTo(width * 0.25, height * 0.9, width / 2, height, width, height * 0.95)
  path.lineTo(width, 0)
  path.close()

  return (
    <KeyboardAvoidingView variant="screen">
      <Screen>
        <Canvas style={{ width, height }}>
          <Path path={path} strokeWidth={2} style="fill" color={colors.secondary.classic} />
        </Canvas>
        <HStack style={{ width, height }} className="absolute items-center justify-center">
          <Image source="logo" height={50} />
          <Text className="ml-s">
            <Text variant="title" className="text-white">
              Psychom'
            </Text>
            <Text variant="title" className="text-white">
              App
            </Text>
          </Text>
        </HStack>
        <SignInForm shadow className="mx-l mt-xl p-m rounded-m" />
        <Center className="flex-1">
          <Image source="autism-table" height={120} />
        </Center>
      </Screen>
    </KeyboardAvoidingView>
  )
}
