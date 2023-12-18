import { Stack } from 'expo-router'

import { PatientScreen } from '$features/patient/views'
import { i18n } from '$infra/i18n'

export default function PatientsRoute() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.patientsTitle') }} />
      <PatientScreen />
    </>
  )
}
