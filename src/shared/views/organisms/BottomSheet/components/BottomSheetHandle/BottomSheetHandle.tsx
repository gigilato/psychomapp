import React, { memo } from 'react'

import { Box, Center } from '$atoms'

import { BottomSheetHandleProps } from './BottomSheetHandle.props'

export const BottomSheetHandle = memo<BottomSheetHandleProps>(({ style }) => {
  return (
    <Center className="h-xl">
      <Box className="bg-grey-pale h-[4] w-[120] rounded-full" style={style} />
    </Center>
  )
})
