import { Stack } from 'expo-router'

import { HeaderLeft, HeaderTitle } from '$navigation'

export default function PatientsLayout() {
  return (
    <Stack
      screenOptions={{
        headerLeft(props) {
          return <HeaderLeft {...props} />
        },
        headerTitle(props) {
          return <HeaderTitle {...props} />
        },
      }}
    >
      <Stack.Screen name="create" options={{ presentation: 'modal' }} />
      <Stack.Screen name="[patientId]/update" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
