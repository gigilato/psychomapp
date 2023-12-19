import { Stack, router } from 'expo-router'

import { KeyboardAvoidingView } from '$atoms'
import { PatientForm } from '$features/patient/views'
import { i18n } from '$infra/i18n'

export default function CreatePatientRoute() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.createPatientTitle') }} />
      <KeyboardAvoidingView>
        <PatientForm className="px-l mt-l" onSubmit={router.back} />
      </KeyboardAvoidingView>
    </>
  )
}
