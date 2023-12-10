/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import clsx from 'clsx'

import { spacing } from '$theme'

import { IButtonProps } from './Button.props'

export const ICON_SIZE = spacing.l
export const HIT_SLOP = 5
export const ERROR_OPACITY = 0.2

export const useButton = ({
  variant,
  disabled,
  error,
  className,
  outlined,
}: Pick<IButtonProps, 'variant' | 'disabled' | 'error' | 'outlined' | 'className'>) => {
  const containerClassName = clsx(
    'flex-row items-center justify-center rounded-s bg-primary-classic',
    variant === 'primary' ? 'h-[44]' : 'h-[40]',
    disabled && 'bg-disabled border-disabled border-[2px]',
    outlined && 'bg-white-light border-primary-classic border-[1px]',
    error && 'bg-white-light border-danger border-[2px]',
    className
  )

  return containerClassName
}

const getTextColor = ({
  disabled,
  error,
  outlined,
}: Pick<IButtonProps, 'disabled' | 'error' | 'outlined'>) => {
  if (disabled) return 'text-grey-strong'
  if (error) return 'text-danger'
  if (outlined) return 'text-primary-classic'
  return 'text-white-light'
}
export const useTextButton = (props: Pick<IButtonProps, 'disabled' | 'error' | 'outlined'>) => {
  return getTextColor(props)
}
