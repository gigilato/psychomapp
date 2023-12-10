import { ForwardedRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native'

import { ITextInputProps } from './TextInput.props'

export const useTextInput = (
  ref: ForwardedRef<TextInput>,
  {
    onBlur,
    onFocus,
    onClear,
    error,
  }: Pick<ITextInputProps, 'onFocus' | 'onBlur' | 'onClear' | 'error'>
) => {
  const [isFocused, setIsFocus] = useState(false)
  const innerRef = useRef<TextInput>(null)
  useImperativeHandle(ref, () => (innerRef as any).current)

  const onFieldFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(true)
      onFocus?.(e)
    },
    [onFocus]
  )

  const onFieldBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setIsFocus(false)
      onBlur?.(e)
    },
    [onBlur]
  )

  const clearInput = () => {
    innerRef.current?.clear()
    onClear?.()
  }

  const textColor = error ? 'text-danger' : isFocused ? 'text-primary-classic' : 'text-grey-strong'
  const borderColor = error
    ? 'border-danger'
    : isFocused
      ? 'border-primary-classic'
      : 'border-grey-strong'

  return {
    innerRef,
    clearInput,
    textColor,
    borderColor,
    onBlur: onFieldBlur,
    onFocus: onFieldFocus,
  }
}
