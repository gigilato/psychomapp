import { TextProps } from 'react-native'

export type TextTransform = 'uppercase' | 'lowercase' | 'upper-first' | 'capitalize'
export type TextVariant =
  | 'title'
  | 'subtitle'
  | 'navigation'
  // Body
  | 'body'
  | 'boldBody'
  | 'blackBody'
  | 'smallBody'
  // action
  | 'button'
  | 'link'
  // input
  | 'inputError'

export interface ITextProps extends Omit<TextProps, 'textTransform'> {
  textTransform?: TextTransform
  variant?: TextVariant
  reversed?: boolean
}
