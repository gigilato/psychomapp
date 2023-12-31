import { StyleProp, ViewStyle } from 'react-native'

import { IBoxProps, IPressableProps } from '$atoms'

export interface ITagContainerProps extends IBoxProps {
  gap: number
}

export interface ITagProps extends Omit<IPressableProps, 'ID'> {
  tag: string
  backgroundColor: string
  gapStyle?: StyleProp<ViewStyle>
}
