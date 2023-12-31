import { useBottomSheet } from '@gorhom/bottom-sheet'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
} from 'react-native-reanimated'

import { Pressable } from '$atoms'

import { BottomSheetBackdropProps } from './BottomSheetBackdrop.props'

export const BottomSheetBackdrop = ({ pressBehavior, ...props }: BottomSheetBackdropProps) => {
  const { animatedIndex, close } = useBottomSheet()
  const [pointerEvents, setPointerEvents] = useState<'none' | 'auto'>(
    animatedIndex.value === -1 ? 'none' : 'auto'
  )
  const closeSheet = () => close()

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(animatedIndex.value, [-1, 0], [0, 0.3], Extrapolation.CLAMP),
  }))

  useAnimatedReaction(
    () => animatedIndex.value,
    (current, previous) => {
      if (current !== previous && Number.isInteger(current))
        runOnJS(setPointerEvents)(current === -1 ? 'none' : 'auto')
    }
  )

  return (
    <Pressable
      animation="none"
      pointerEvents={pointerEvents}
      onPress={pressBehavior === 'close' ? closeSheet : undefined}
      className="bg-grey-classic"
      style={[animatedStyle, StyleSheet.absoluteFill]}
      {...props}
    />
  )
}
