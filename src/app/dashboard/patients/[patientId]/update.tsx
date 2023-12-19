import { Stack, useLocalSearchParams, router } from 'expo-router'

import { KeyboardAvoidingView } from '$atoms'
import { PatientForm } from '$features/patient/views'
import { i18n } from '$infra/i18n'

export default function UpdatePatientRoute() {
  const { patientId } = useLocalSearchParams()
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.update') }} />
      <KeyboardAvoidingView>
        <PatientForm className="px-l mt-l" patientId={patientId as string} onSubmit={router.back} />
      </KeyboardAvoidingView>
    </>
  )
}
