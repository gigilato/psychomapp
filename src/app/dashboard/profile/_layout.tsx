import { Stack, router } from 'expo-router'

import { Text } from '$atoms'
import { PressableIcon } from '$molecules'

export default function ProfileLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft(props) {
          return (
            <PressableIcon
              ID="goback"
              icon="chevron-right"
              iconSize={40}
              style={{ transform: [{ rotate: '180deg' }] }}
              onPress={router.back}
            />
          )
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
