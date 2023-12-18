import clsx from 'clsx'
import { forwardRef, memo, useImperativeHandle, useRef } from 'react'
import { TextInput as RNTextInput } from 'react-native'

import { Box, HStack, textVariants } from '$atoms'
import { PressableIcon } from '$molecules/Button'
import { colors } from '$theme'

import { ITextInputProps } from './TextInput.props'

export const TextInput = memo<ITextInputProps>(
  forwardRef<RNTextInput, ITextInputProps>(
    (
      {
        ID,
        iconLeft,
        onPressIconLeft,
        iconRight,
        onPressIconRight,
        onClear,
        error,
        className,
        iconRightClassName,
        iconLeftClassName,
        ...props
      },
      ref
    ) => {
      const innerRef = useRef<RNTextInput>(null)
      useImperativeHandle(ref, () => (innerRef as any).current)

      const textColor = error ? 'text-danger' : 'text-grey-strong'
      const borderColor = error ? 'border-danger' : 'border-grey-strong'

      return (
        <HStack
          className={clsx(
            'items-center rounded-s py-s border-[1px] bg-white-light overflow-hidden',
            borderColor,
            className
          )}
        >
          {iconLeft && (
            <PressableIcon
              ID={`${ID}/LeftIcon`}
              onPress={onPressIconLeft}
              icon={iconLeft}
              iconSize={15}
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
              {...props}
            />
          </Box>
          {iconRight && (
            <PressableIcon
              ID={`${ID}/RightIcon`}
              onPress={onPressIconRight}
              icon={iconRight}
              iconSize={15}
              iconClassName={clsx('mr-xs', textColor, iconRightClassName)}
            />
          )}
        </HStack>
      )
    }
  )
)
