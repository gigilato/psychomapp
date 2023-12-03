import { useEffect } from 'react'
import {
  ExtrapolationType,
  InterpolationOptions,
  SharedValue,
  interpolate,
  interpolateColor,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'

export const useTransition = (isActive: boolean) => {
  const transition = useSharedValue(isActive ? 1 : 0)
  useEffect(() => {
    transition.value = withTiming(isActive ? 1 : 0)
  }, [isActive, transition])
  return transition
}

export const mix = (
  transition: SharedValue<number>,
  output: [number, number],
  type?: ExtrapolationType
) => {
  'worklet'
  return interpolate(transition.value, [0, 1], output, type)
}

type Color = string | number
export const mixColor = (
  transition: SharedValue<number>,
  output: [Color, Color],
  colorSpace?: 'RGB' | 'HSV',
  options?: InterpolationOptions
) => {
  'worklet'
  return interpolateColor(transition.value, [0, 1], output, colorSpace, options)
}
