import { UseControllerProps } from 'react-hook-form'
import { DatePickerProps } from 'react-native-date-picker'

export interface IFormDateInputProps<FieldValues extends object>
  extends UseControllerProps<FieldValues>,
    Omit<DatePickerProps, 'modal' | 'date' | 'onDateChange'> {}
