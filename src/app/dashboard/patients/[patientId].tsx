import { Stack, useLocalSearchParams } from 'expo-router'

import { Center, Text } from '$atoms'
// import { usePatient } from '$features/patient/infra/controllers/usePatient'
// import { i18n } from '$infra/i18n'

export default function PatientRoute() {
  const { patientId } = useLocalSearchParams()
  // const { data, isLoading } = usePatient(patientId as string)
  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <Center className="flex-1">
        <Text>{patientId}</Text>
      </Center>
    </>
  )
}
