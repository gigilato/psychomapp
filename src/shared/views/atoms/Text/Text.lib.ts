import { upperFirst, capitalize } from 'lodash'
import { ReactNode } from 'react'

import { TextTransform, TextVariant } from './Text.props'

export const textVariants: Record<TextVariant, string> = {
  // Title
  title: 'font-[LibreFranklin_700Bold] text-[34px] leading-[42px]',
  subtitle: 'font-[LibreFranklin_700Bold] text-[20px] leading-[28px]',
  // Body
  body: 'font-[LibreFranklin_400Regular] text-[14px] leading-[18px]',
  boldBody: 'font-[LibreFranklin_600SemiBold] text-[14px] leading-[18px]',
  italicBody: 'font-[LibreFranklin_400Regular_Italic] text-[14px] leading-[18px]',
}

export const getContent = (children: ReactNode, textTransform?: TextTransform) => {
  if (typeof children !== 'string' || !textTransform) return children
  const text = children ?? ''
  switch (textTransform) {
    case 'lowercase':
      return text.toLowerCase()
    case 'uppercase':
      return text.toUpperCase()
    case 'capitalize':
      return capitalize(text)
    default:
      return upperFirst(text)
  }
}
