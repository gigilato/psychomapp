import { Box } from '$atoms'
import { FormDateInput, FormTextInput } from '$forms'
import { i18n } from '$infra/i18n'
import { Button } from '$molecules'

import { PatientFormType, usePatientForm } from './PatientForm.lib'
import { IPatientFormProps } from './PatientForm.props'

export const PatientForm = (props: IPatientFormProps) => {
  const { lastnameRef, form, onPressSubmit, isPending } = usePatientForm()
  return (
    <Box {...props}>
      <FormTextInput<PatientFormType>
        name="firstname"
        label={i18n.t('forms.firstname.label')}
        placeholder={i18n.t('forms.firstname.placeholder')}
        control={form.control}
        type="default"
        onSubmitEditing={() => lastnameRef.current?.focus()}
      />
      <FormTextInput<PatientFormType>
        className="mt-s"
        name="lastname"
        label={i18n.t('forms.lastname.label')}
        placeholder={i18n.t('forms.lastname.placeholder')}
        control={form.control}
        type="default"
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
