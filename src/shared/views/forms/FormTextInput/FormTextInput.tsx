import { ReactNode, forwardRef, useCallback, useState } from 'react'
import { useController } from 'react-hook-form'
import {
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputFocusEventData,
} from 'react-native'

import { FormInputWrapper } from '$forms/FormInputWrapper'
import { formTypeMapper } from '$forms/FormTextInput/FormTextInput.lib'
import { TextInput, ITextInputProps } from '$molecules'

import { IFormTextInputProps } from './FormTextInput.props'

const FormPasswordInput = forwardRef<RNTextInput, ITextInputProps>(
  ({ iconRight, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
      <TextInput
        ref={ref}
        secureTextEntry={!isPasswordVisible}
        iconLeft="lock"
        iconRight={isPasswordVisible ? 'eye-off' : 'eye'}
        onPressIconRight={() => setIsPasswordVisible(!isPasswordVisible)}
        {...props}
      />
    )
  }
)

export const FormTextInput: <FieldValues extends object>(
  props: IFormTextInputProps<FieldValues>
) => ReactNode = forwardRef(
  (
    {
      name,
      control,
      type = 'default',
      label,
      rules,
      disabled,
      onBlur: onBlurProp,
      className,
      ...props
    },
    ref
  ) => {
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

    const { input, wrapper } = formTypeMapper[type]

    return (
      <FormInputWrapper label={label ?? wrapper.label} className={className} error={error?.message}>
        {type === 'password' ? (
          <FormPasswordInput
            ref={ref}
            ID={`input/${name}`}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={error?.message}
            {...input}
            {...props}
          />
        ) : (
          <TextInput
            error={error?.message}
            ref={ref}
            ID={`input/${name}`}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...input}
            {...props}
          />
        )}
      </FormInputWrapper>
    )
  }
)
