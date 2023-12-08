import clsx from 'clsx'
import { forwardRef, memo, useState } from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { Box, HStack, Text, textVariants } from '$atoms'
import { i18n } from '$infra/i18n'
import { PressableIcon } from '$molecules/Button'
import { colors } from '$theme'

import { useTextInput } from './TextInput.lib'
import { ITextInputProps } from './TextInput.props'

export const TextInput = memo<ITextInputProps>(
  forwardRef<RNTextInput, ITextInputProps>(
    (
      {
        ID,
        onFocus,
        onBlur,
        iconLeft,
        onPressIconLeft,
        iconRight,
        onPressIconRight,
        onClear,
        error,
        className,
        iconRightClassName,
        iconLeftClassName,
        label,
        ...props
      },
      ref
    ) => {
      const { borderColor, textColor, innerRef, clearInput, ...inputProps } = useTextInput(ref, {
        error,
        onBlur,
        onFocus,
        onClear,
      })

      return (
        <Box className={className}>
          {label || error ? (
            <HStack className="mb-xs items-center justify-between">
              {label ? (
                <Text variant="boldBody" className={textColor}>
                  {label}
                </Text>
              ) : null}
              {error ? (
                <Text
                  variant="inputError"
                  className={clsx(label ? 'ml-xs' : '', textColor)}
                >{`*${error}`}</Text>
              ) : null}
            </HStack>
          ) : null}
          <HStack
            className={clsx(
              'items-center rounded-s py-s border-[1px] bg-white overflow-hidden',
              borderColor
            )}
          >
            {iconLeft && (
              <PressableIcon
                ID={`${ID}/LeftIcon`}
                onPress={onPressIconLeft}
                icon={iconLeft}
                iconClassName={clsx('ml-xs', textColor, iconLeftClassName)}
              />
            )}
            <Box className="flex-1 px-s ">
              <RNTextInput
                testID={ID}
                ref={innerRef}
                className={clsx('text-[16px] leading-[20px]', textVariants.body)}
                keyboardType="default"
                autoCapitalize="none"
                cursorColor={colors.primary.classic}
                selectionColor={colors.primary.classic}
                {...inputProps}
                {...props}
              />
            </Box>
            {(iconRight || props.value !== '') && (
              <PressableIcon
                ID={`${ID}/RightIcon`}
                onPress={onPressIconRight ? onPressIconRight : clearInput}
                icon={iconRight ?? 'cross'}
                iconClassName={clsx('mr-xs', textColor, iconRightClassName)}
              />
            )}
          </HStack>
        </Box>
      )
    }
  )
)

export const EmailInput = forwardRef<RNTextInput, ITextInputProps>((props, ref) => (
  <TextInput
    ref={ref}
    keyboardType="email-address"
    textContentType="emailAddress"
    label={i18n.t('forms.email.label')}
    placeholder={i18n.t('forms.email.placeholder')}
    autoComplete="email"
    iconRight={props.value === '' ? 'envelope' : undefined}
    {...props}
  />
))

export const PasswordInput = forwardRef<RNTextInput, ITextInputProps>(
  ({ iconRight, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <TextInput
        ref={ref}
        label={i18n.t('forms.password.label')}
        placeholder={i18n.t('forms.password.placeholder')}
        textContentType="password"
        autoComplete="password"
        secureTextEntry={!isPasswordVisible}
        iconRight={props.value === '' ? 'lock' : isPasswordVisible ? 'eye-barred' : 'eye'}
        onPressIconRight={() => setIsPasswordVisible(!isPasswordVisible)}
        {...props}
      />
    )
  }
)
