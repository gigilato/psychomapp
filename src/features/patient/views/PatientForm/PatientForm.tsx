import { Box } from '$atoms'
import { FormDateInput, FormTextInput } from '$forms'
import { i18n } from '$infra/i18n'
import { Button } from '$molecules'

import { PatientFormType, usePatientForm } from './PatientForm.lib'
import { IPatientFormProps } from './PatientForm.props'

export const PatientForm = ({ patientId, onSubmit, ...props }: IPatientFormProps) => {
  const { lastnameRef, form, onPressSubmit, isPending } = usePatientForm(onSubmit, patientId)
  return (
    <Box {...props}>
      <FormTextInput<PatientFormType>
        name="firstname"
        type="firstname"
        control={form.control}
        onSubmitEditing={() => lastnameRef.current?.focus()}
      />
      <FormTextInput<PatientFormType>
        className="mt-s"
        name="lastname"
        type="lastname"
        control={form.control}
        ref={lastnameRef}
      />
      <FormDateInput<PatientFormType> className="mt-s" name="birthdate" control={form.control} />
      <Button
        ID="patientForm/button"
        event="clic_create_patient"
        title={i18n.t('common.validate')}
        onPress={onPressSubmit}
        className="mt-xl"
        isLoading={isPending}
      />
    </Box>
  )
}
