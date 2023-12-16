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
    'flex-row items-center justify-center rounded-s',
    variant === 'primary' ? 'h-[44]' : 'h-[40]',
    variant === 'primary' ? 'bg-primary-classic' : 'bg-secondary-strong',
    disabled && 'bg-disabled border-disabled border-[2px]',
    outlined && 'bg-white-light border-[1px]',
    outlined && variant === 'primary' && 'border-primary-classic',
    outlined && variant === 'secondary' && 'border-secondary-strong',
    error && 'bg-white-light border-danger border-[2px]',
    className
  )

  return containerClassName
}

const getTextColor = ({
  variant,
  disabled,
  error,
  outlined,
}: Pick<IButtonProps, 'disabled' | 'error' | 'outlined' | 'variant'>) => {
  if (disabled) return 'text-grey-strong'
  if (error) return 'text-danger'
  if (outlined) return variant === 'primary' ? 'text-primary-classic' : 'text-secondary-strong'
  return 'text-white-light'
}
export const useTextButton = (props: Pick<IButtonProps, 'disabled' | 'error' | 'outlined'>) => {
  return getTextColor(props)
}
