import { Stack } from 'expo-router'

import { EquipmentScreen } from '$features/equipement/views'
import { i18n } from '$infra/i18n'

export default function EquipmentRoute() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('settings.equipment') }} />
      <EquipmentScreen />
    </>
  )
}
