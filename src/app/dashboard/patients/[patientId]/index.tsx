import { Stack, useLocalSearchParams } from 'expo-router'

import { PatientScreen } from '$features/patient/views'

export default function PatientRoute() {
  const { patientId } = useLocalSearchParams()

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <PatientScreen patientId={patientId as string} />
    </>
  )
}
