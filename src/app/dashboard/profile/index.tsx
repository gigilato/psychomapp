import { Stack } from 'expo-router'

import { ProfileScreen } from '$features/profile/views'

export default function ProfileRoute() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ProfileScreen />
    </>
  )
}
