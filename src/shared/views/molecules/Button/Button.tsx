/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import clsx from 'clsx'
import { ActivityIndicator } from 'react-native'

import { Pressable, Icon, Text, IPressableProps } from '$atoms'
import { colors } from '$theme'

import { ERROR_OPACITY, HIT_SLOP, ICON_SIZE, useButton, useTextButton } from './Button.lib'
import {
  IAbstractButtonProps,
  IButtonProps,
  IIconButtonProps,
  IPressableIconProps,
  IPressableTextProps,
} from './Button.props'

const PressableBackground = ({
  variant = 'primary',
  error,
  disabled,
  isLoading,
  className,
  outlined,
  ...props
}: IAbstractButtonProps & IPressableProps) => {
  const containerClassName = useButton({
    className,
    variant,
    disabled,
    error,
    outlined,
  })
  return (
    <Pressable
      animation={disabled ? 'none' : 'scale'}
      disabled={disabled || isLoading}
      animationOpacity={error ? ERROR_OPACITY : undefined}
      className={containerClassName}
      {...props}
    />
  )
}

export const Button = ({
  iconLeft,
  iconLeftClassName,
  _iconLeft,
  iconRight,
  iconRightClassName,
  _iconRight,
  title,
  textClassName: _textClassName,
  _text,

  ...props
}: IButtonProps) => {
  const { isLoading, disabled, outlined, error } = props
  const textColor = useTextButton({ disabled, error, outlined })
  const textClassName = clsx(textColor, _textClassName)

  return (
    <PressableBackground {...props}>
      {isLoading ? (
        <ActivityIndicator color={outlined ? colors.primary.classic : 'white'} />
      ) : (
        <>
          {iconLeft ? (
            <Icon
              name={iconLeft}
              size={ICON_SIZE}
              className={clsx(textColor, 'mr-xs', iconLeftClassName)}
              {..._iconLeft}
            />
          ) : null}
          <Text variant="button" textTransform="upper-first" className={textClassName} {..._text}>
            {title}
          </Text>
          {iconRight ? (
            <Icon
              name={iconRight}
              size={ICON_SIZE}
              className={clsx(textColor, 'ml-xs', iconRightClassName)}
              {..._iconRight}
            />
          ) : null}
        </>
      )}
    </PressableBackground>
  )
}

export const IconButton = ({
  icon,
  iconClassName,
  _icon,
  className,
  ...props
}: IIconButtonProps) => {
  const { isLoading, disabled, error } = props
  const textColor = useTextButton({ disabled, error })
  return (
    <PressableBackground className={clsx('w-[56]', className)} {...props}>
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Icon name={icon} size={ICON_SIZE} className={clsx(textColor, iconClassName)} {..._icon} />
      )}
    </PressableBackground>
  )
}

export const PressableIcon = ({
  icon,
  iconClassName,
  iconSize = ICON_SIZE,
  _icon,
  ...props
}: IPressableIconProps) => {
  return (
    <Pressable hitSlop={HIT_SLOP} {...props}>
      <Icon name={icon} className={iconClassName} size={iconSize} {..._icon} />
    </Pressable>
  )
}

export const PressableText = ({
  textClassName,
  variant,
  children,
  _text,
  ...props
}: IPressableTextProps) => {
  return (
    <Pressable hitSlop={HIT_SLOP} {...props}>
      <Text variant={variant} className={textClassName} {..._text}>
        {children}
      </Text>
    </Pressable>
  )
}
