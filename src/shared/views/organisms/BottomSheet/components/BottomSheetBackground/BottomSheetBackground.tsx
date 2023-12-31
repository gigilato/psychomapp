import clsx from 'clsx'
import React, { memo } from 'react'
import { StyleSheet } from 'react-native'

import { Box } from '$atoms'

import { BottomSheetBackgroundProps } from './BottomSheetBackground.props'

export const BottomSheetBackground = memo<BottomSheetBackgroundProps>(({ className, ...props }) => {
  return (
    <Box
      className={clsx('bg-white-classic overflow-hidden rounded-t-l', className)}
      style={StyleSheet.absoluteFill}
      {...props}
    />
  )
})
