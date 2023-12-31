import { router } from 'expo-router'

import { PatientList } from '$features/patient/views/components'
import { ActionButton } from '$molecules'

import { IPatientsScreenProps } from './PatientsScreen.props'

export const PatientsScreen = (props: IPatientsScreenProps) => {
  const onPress = () => router.push('/dashboard/patients/create')
  return (
    <>
      <PatientList />
      <ActionButton ID="addPatients" handleTabBar onPress={onPress} />
    </>
  )
}
