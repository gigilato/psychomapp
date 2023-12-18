import { Stack, router } from 'expo-router'

import { PatientList } from '$features/patient/views'
import { i18n } from '$infra/i18n'
import { AddButton } from '$molecules'

export default function PatientsRoute() {
  const onPress = () => router.push('/dashboard/patients/create')
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.patientsTitle') }} />
      <PatientList />
      <AddButton ID="addPatients" handleTabBar onPress={onPress} />
    </>
  )
}
