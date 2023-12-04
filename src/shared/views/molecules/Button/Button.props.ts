import { ReactNode } from 'react'

import { IIconProps, IPressableProps, ITextProps, IconName, TextVariant } from '$atoms'

export type ButtonVariant = 'primary' | 'secondary'

export interface IAbstractButtonProps {
  variant?: ButtonVariant
  isLoading?: boolean
  error?: boolean
  outlined?: boolean
}
export interface IButtonProps extends IPressableProps, IAbstractButtonProps {
  // icon right
  iconRight?: IconName
  iconRightClassName?: string
  _iconRight?: ITextProps
  // icon left
  iconLeft?: IconName
  iconLeftClassName?: string
  _iconLeft?: ITextProps
  // text
  title: string
  textClassName?: string
  _text?: ITextProps
}

export interface IIconButtonProps extends IPressableProps, IAbstractButtonProps {
  icon: IconName
  iconClassName?: string
  iconSize?: number
  _icon?: IIconProps
}

export interface IPressableIconProps extends IPressableProps {
  icon: IconName
  iconClassName?: string
  iconSize?: number
  _icon?: IIconProps
  isLoading?: boolean
}

export interface IPressableTextProps extends Omit<IPressableProps, 'children'> {
  textClassName?: string
  children: ReactNode
  variant?: TextVariant
  _text?: ITextProps
}
