import { UseControllerProps } from 'react-hook-form'

import { ITextInputProps } from '$forms/TextInput'

export interface IFormTextInputProps<FieldValues extends object>
  extends UseControllerProps<FieldValues>,
    Omit<ITextInputProps, 'ID' | 'defaultValue' | 'value' | 'onChangeText'> {
  type?: 'default' | 'email' | 'password' | 'phone' | 'number'
}
