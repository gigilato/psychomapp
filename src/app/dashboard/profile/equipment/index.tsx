import { Stack } from 'expo-router'

import { Text, Center } from '$atoms'
import { i18n } from '$infra/i18n'

export default function EquipmentRoute() {
  return (
    <>
      <Stack.Screen options={{ title: i18n.t('settings.equipment') }} />
      <Center className="flex-1">
        <Text>equiment</Text>
      </Center>
    </>
  )
}
