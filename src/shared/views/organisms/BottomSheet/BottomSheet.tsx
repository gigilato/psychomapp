import { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { forwardRef, memo } from 'react'

import { Box } from '$atoms'

import { useBottomSheet } from './BottomSheet.lib'
import { IBottomSheetProps } from './BottomSheet.props'

export const BottomSheet = memo(
  forwardRef<BottomSheetModal, IBottomSheetProps>(
    ({ children, containerClassName, ...defaultProps }, ref) => {
      const { onLayout, BottomSheetContainer, ...props } = useBottomSheet(defaultProps, ref)
      return (
        <BottomSheetContainer {...props}>
          <Box onLayout={onLayout} className={containerClassName}>
            {children}
          </Box>
        </BottomSheetContainer>
      )
    }
  )
)
