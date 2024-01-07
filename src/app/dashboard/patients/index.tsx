import { Stack, useFocusEffect } from 'expo-router'

import { PatientsScreen } from '$features/patient/views'
import { i18n } from '$infra/i18n'
import { setTabBarVisibility } from '$infra/layout'

export default function PatientsRoute() {
  useFocusEffect(() => {
    setTabBarVisibility(true)
  })

  return (
    <>
      <Stack.Screen options={{ title: i18n.t('navigation.patientsTitle') }} />
      <PatientsScreen />
    </>
  )
}
