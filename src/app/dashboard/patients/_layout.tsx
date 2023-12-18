import { Stack, router } from 'expo-router'

import { Text } from '$atoms'
import { PressableIcon } from '$molecules'

export default function PatientsLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft(props) {
          return props.canGoBack ? (
            <PressableIcon ID="goback" icon="chevron-left" iconSize={30} onPress={router.back} />
          ) : null
        },
        headerTitle(props) {
          return (
            <Text variant="navigation" textTransform="upper-first">
              {props.children}
            </Text>
          )
        },
      }}
    />
  )
}
