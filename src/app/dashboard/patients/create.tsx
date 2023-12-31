import { Stack } from 'expo-router'

import { PatientCreateScreen } from '$features/patient/views'
import { i18n } from '$infra/i18n'

export default function CreatePatientRoute() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.createPatientTitle') }} />
      <PatientCreateScreen />
    </>
  )
}
