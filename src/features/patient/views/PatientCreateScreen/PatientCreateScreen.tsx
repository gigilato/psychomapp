import { router } from 'expo-router'

import { KeyboardAvoidingView } from '$atoms'
import { PatientForm } from '$features/patient/views/components'

import { IPatientCreateScreenProps } from './PatientCreateScreen.props'

export const PatientCreateScreen = (props: IPatientCreateScreenProps) => {
  return (
    <KeyboardAvoidingView>
      <PatientForm className="px-l mt-l" onSubmit={router.back} />
    </KeyboardAvoidingView>
  )
}
