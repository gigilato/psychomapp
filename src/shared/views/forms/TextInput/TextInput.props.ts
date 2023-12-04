import { Ref } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { IconName } from '$atoms'

export interface ITextInputProps extends TextInputProps {
  ID: string
  label?: string
  error?: string
  iconLeft?: IconName
  iconLeftClassName?: string
  onPressIconLeft?: () => void
  iconRight?: IconName
  iconRightClassName?: string
  onPressIconRight?: () => void
  onClear?: () => void
  ref?: Ref<TextInput>
}
