import { ReactNode, forwardRef, useCallback, useMemo } from 'react'
import { useController } from 'react-hook-form'
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'

import { EmailInput, TextInput, PasswordInput } from '$forms/TextInput'

import { IFormTextInputProps } from './FormTextInput.props'

export const FormTextInput: <FieldValues extends object>(
  props: IFormTextInputProps<FieldValues>
) => ReactNode = forwardRef(
  ({ name, control, type, rules, disabled, onBlur: onBlurProp, ...props }, ref) => {
    const TextInputComponent = useMemo(() => {
      switch (type) {
        case 'email':
          return EmailInput
        case 'password':
          return PasswordInput
        default:
          return TextInput
      }
    }, [type])

    const {
      field: { onChange, onBlur: onBlurForm, value },
      fieldState: { error },
    } = useController({ control, name, rules })

    const onBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlurProp?.(e)
        onBlurForm()
      },
      [onBlurForm, onBlurProp]
    )

    return (
      <TextInputComponent
        error={error?.message}
        ref={ref}
        ID={`input/${name}`}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        {...props}
      />
    )
  }
)
