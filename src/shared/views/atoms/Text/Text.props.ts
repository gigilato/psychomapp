import { TextProps } from 'react-native'

export type TextTransform = 'uppercase' | 'lowercase' | 'upper-first' | 'capitalize'
export type TextVariant =
  | 'title'
  | 'subtitle'
  // Body
  | 'body'
  | 'boldBody'
  | 'italicBody'

export interface ITextProps extends Omit<TextProps, 'textTransform'> {
  textTransform?: TextTransform
  variant?: TextVariant
  reversed?: boolean
}
