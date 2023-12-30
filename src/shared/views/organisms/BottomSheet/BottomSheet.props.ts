import { BottomSheetModalProps } from '@gorhom/bottom-sheet'
import { ReactNode } from 'react'

export interface IBottomSheetProps
  extends Omit<BottomSheetModalProps, 'snapPoints' | 'enableDynamicSizing' | 'ref'> {
  properties?: Record<string, string | undefined>
  enableDynamicSnapPoints?: boolean
  snapPoints?: (string | number)[]
  title?: string
  closeOnBackdropPress?: boolean
  children: ReactNode
  modal?: boolean
  containerClassName?: string
  backdropClassName?: string
  backgroundClassName?: string
  handleClassName?: string
}
