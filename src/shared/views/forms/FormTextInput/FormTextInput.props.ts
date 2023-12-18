import { UseControllerProps } from 'react-hook-form'

import { ITextInputProps } from '$molecules'

export type FormInputType = 'default' | 'firstname' | 'lastname' | 'email' | 'password'
export interface IFormTextInputProps<FieldValues extends object>
  extends UseControllerProps<FieldValues>,
    Omit<ITextInputProps, 'ID' | 'defaultValue' | 'value' | 'onChangeText'> {
  type?: FormInputType
  label?: string
}
