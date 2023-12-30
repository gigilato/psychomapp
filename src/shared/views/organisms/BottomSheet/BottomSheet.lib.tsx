import BottomSheetDefault, { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardedRef, useCallback, useImperativeHandle, useMemo, useRef, useState } from 'react'
import { LayoutChangeEvent } from 'react-native'

import { spacing } from '$theme'
import { useSafeAreaInsets } from '$views/libs/safeAreaInsets'

import { IBottomSheetProps } from './BottomSheet.props'
import { BottomSheetBackdrop, BottomSheetBackground, BottomSheetHandle } from './components'

export const useBottomSheet = (
  {
    name,
    properties,
    snapPoints = ['40%'],
    index = snapPoints.length - 1,
    closeOnBackdropPress = true,
    enableDynamicSnapPoints = true,
    modal = true,
    ...otherProps
  }: Omit<IBottomSheetProps, 'children'>,
  ref: ForwardedRef<BottomSheetModal>
) => {
  const innerRef = useRef<BottomSheetModal>(null)
  useImperativeHandle(ref, () => ({ ...(innerRef as any).current }))

  const renderBackdrop = useCallback(
    () => (
      <BottomSheetBackdrop
        ID="BottomSheet/backdrop"
        pressBehavior={closeOnBackdropPress ? 'close' : 'none'}
        hitSlop={200}
      />
    ),
    [closeOnBackdropPress]
  )
  const renderBackground = useCallback(() => <BottomSheetBackground />, [])
  const renderHandle = useCallback(() => <BottomSheetHandle />, [])

  const { bottom } = useSafeAreaInsets()

  const [dynamicSnapPoints, setSnapPoints] = useState<(number | string)[]>(snapPoints)
  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (!enableDynamicSnapPoints) return
      const height = event.nativeEvent.layout.height + bottom + spacing.xl
      setSnapPoints([height, ...snapPoints.slice(1)])
    },
    [snapPoints, bottom, enableDynamicSnapPoints]
  )

  const BottomSheetContainer = useMemo(
    () => (modal ? BottomSheetModal : BottomSheetDefault),
    [modal]
  )

  return {
    ref: innerRef,
    index,
    snapPoints: enableDynamicSnapPoints ? dynamicSnapPoints : snapPoints,
    backdropComponent: renderBackdrop,
    handleComponent: renderHandle,
    backgroundComponent: renderBackground,
    onLayout,
    BottomSheetContainer,
    ...otherProps,
  }
}
