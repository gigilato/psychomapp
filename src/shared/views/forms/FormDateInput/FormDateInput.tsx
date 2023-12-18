import { ReactNode, useState } from 'react'
import { useController } from 'react-hook-form'
import { StyleSheet } from 'react-native'
import DatePicker from 'react-native-date-picker'

import { Pressable } from '$atoms'
import { InputWrapper } from '$forms/TextInput'
import { i18n } from '$infra/i18n'
import { parseISO, format } from '$libs/dates'
import { TextInput } from '$molecules'

import { IFormDateInputProps } from './FormDateInput.props'

export const FormDateInput: <FieldValues extends object>(
  props: IFormDateInputProps<FieldValues>
) => ReactNode = ({ className, control, rules, name, ...props }) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name, rules })

  const [isOpen, setOpen] = useState(false)

  return (
    <InputWrapper
      className={className}
      label={i18n.t('forms.birthdate.label')}
      error={error?.message}
    >
      <TextInput
        ID="dateInput"
        placeholder={i18n.t('forms.birthdate.placeholder')}
        value={value !== '' ? format(value, 'dd/MM/yyyy') : ''}
        editable={false}
      />
      <Pressable
        ID="dateInputPressable"
        onPress={() => setOpen(true)}
        style={StyleSheet.absoluteFill}
      />
      <DatePicker
        modal
        open={isOpen}
        mode="date"
        maximumDate={new Date()}
        date={value !== '' ? parseISO(value) : new Date()}
        onConfirm={(date) => {
          setOpen(false)
          onChange(date.toISOString())
        }}
        onCancel={() => setOpen(false)}
        onDateChange={() => setOpen(false)}
        confirmText={i18n.t('common.validate')}
        cancelText={i18n.t('common.cancel')}
        title={i18n.t('forms.common.chooseDate')}
        locale="fr"
        {...props}
      />
    </InputWrapper>
  )
}
