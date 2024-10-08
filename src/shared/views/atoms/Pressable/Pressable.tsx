import clsx from 'clsx'
import { styled } from 'nativewind'
import { Pressable as PressableDefault } from 'react-native'
import Animated from 'react-native-reanimated'

import { shadowClassName } from '$views/libs/shadow'

import { usePressable } from './Pressable.lib'
import { IPressableProps } from './Pressable.props'

const AnimatedPressable = Animated.createAnimatedComponent(styled(PressableDefault))

export const Pressable = ({ style, ID, className, shadow, ...props }: IPressableProps) => {
  const { onPressIn, onPressOut, onPress, animatedStyle } = usePressable(props)
  return (
    <AnimatedPressable
      testID={ID}
      className={clsx(shadow ? shadowClassName : '', className)}
      {...props}
      style={[animatedStyle, style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    />
  )
}
