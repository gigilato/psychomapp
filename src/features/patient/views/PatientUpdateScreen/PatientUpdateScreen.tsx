import { router } from 'expo-router'

import { KeyboardAvoidingView } from '$atoms'
import { PatientForm } from '$features/patient/views/components'

import { IPatientUpdateScreenProps } from './PatientUpdateScreen.props'

export const PatientUpdateScreen = ({ patientId }: IPatientUpdateScreenProps) => {
  return (
    <KeyboardAvoidingView>
      <PatientForm className="px-l mt-l" patientId={patientId} onSubmit={router.back} />
    </KeyboardAvoidingView>
  )
}
