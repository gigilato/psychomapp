import { useCallback, useMemo } from 'react'
import { GestureResponderEvent } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming, interpolate } from 'react-native-reanimated'

// import * as analytics from '$infra/analytics'

import { IPressableProps } from './Pressable.props'

export const usePressable = ({
  onPressIn,
  onPressOut,
  onPress,
  animation = 'opacity',
  animationOpacity = 0.7,
  animationScale = 0.98,
  animationDuration = 300,
}: Omit<IPressableProps, 'ID'>) => {
  const transition = useSharedValue(0)
  const animationConfig = useMemo(() => ({ duration: animationDuration }), [animationDuration])

  const animatedOnPressIn = useCallback(
    (gestureEvent: GestureResponderEvent) => {
      transition.value = withTiming(1, animationConfig)
      onPressIn?.(gestureEvent)
    },
    [onPressIn, animationConfig, transition]
  )
  const animatedOnPressOut = useCallback(
    (gestureEvent: GestureResponderEvent) => {
      transition.value = withTiming(0, animationConfig)
      onPressOut?.(gestureEvent)
    },
    [onPressOut, animationConfig, transition]
  )

  const handlePress = useCallback(
    (gestureEvent: GestureResponderEvent) => {
      onPress?.(gestureEvent)
      // if (event) analytics.logEvent(event, eventProperties)
    },
    [onPress]
  )

  const animatedStyle = useAnimatedStyle(() => {
    if (animation === 'none') return {}
    const inputRange = [0, 1]

    const isOpacity = animation === 'opacity'
    const value = interpolate(transition.value, inputRange, [
      1,
      isOpacity ? animationOpacity : animationScale,
    ])
    return isOpacity ? { opacity: value } : { transform: [{ scale: value }] }
  }, [animation, animationScale, animationOpacity, transition])

  return {
    onPressIn: animatedOnPressIn,
    onPressOut: animatedOnPressOut,
    onPress: handlePress,
    animatedStyle,
  }
}
