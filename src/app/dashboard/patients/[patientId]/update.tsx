import { Stack, useLocalSearchParams } from 'expo-router'

import { PatientUpdateScreen } from '$features/patient/views'
import { i18n } from '$infra/i18n'
import { HeaderLeft } from '$navigation'

export default function UpdatePatientRoute() {
  const { patientId } = useLocalSearchParams()
  return (
    <>
      <Stack.Screen
        options={{
          title: i18n.t('navigation.update'),
          headerLeft: (props) => <HeaderLeft {...props} />,
        }}
      />
      <PatientUpdateScreen patientId={patientId as string} />
    </>
  )
}
