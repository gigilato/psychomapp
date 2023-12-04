import { Pressable as PressableDefault } from 'react-native'
import Animated from 'react-native-reanimated'

import { usePressable } from './Pressable.lib'
import { IPressableProps } from './Pressable.props'

const AnimatedPressable = Animated.createAnimatedComponent(PressableDefault)

export const Pressable = ({ style, ID, ...props }: IPressableProps) => {
  const { onPressIn, onPressOut, onPress, animatedStyle } = usePressable(props)
  return (
    <AnimatedPressable
      testID={ID}
      {...props}
      style={[animatedStyle, style]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
    />
  )
}
