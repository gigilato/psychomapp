import { Stack, router } from 'expo-router'

import { Text } from '$atoms'
import { setTabBarVisibility } from '$infra/layout'
import { PressableIcon } from '$molecules'

export default function PatientsLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft(props) {
          return props.canGoBack ? (
            <PressableIcon
              ID="goback"
              icon="chevron-left"
              iconSize={30}
              onPress={() => {
                setTabBarVisibility(true)
                router.back()
              }}
            />
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
    >
      <Stack.Screen
        name="create"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}
