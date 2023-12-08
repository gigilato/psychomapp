import { upperFirst, capitalize } from 'lodash'
import { ReactNode } from 'react'

import { TextTransform, TextVariant } from './Text.props'

export const textVariants: Record<TextVariant, string> = {
  // Title
  title: 'font-[SpaceGrotesk-Bold] text-[34px] leading-[42px]',
  subtitle: 'font-[SpaceGrotesk-Bold] text-[20px] leading-[28px]',
  // Body
  body: 'font-[SpaceGrotesk-Regular] text-[14px] leading-[18px]',
  boldBody: 'font-[SpaceGrotesk-Medium] text-[14px] leading-[18px]',
  // action
  button: 'font-[SpaceGrotesk-Bold] text-[16px] classic',
  link: 'font-[SpaceGrotesk-Medium] text-[14px] text-grey-classic underline',
  // input
  inputError: 'font-[SpaceGrotesk-Light] text-[12px]',
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
