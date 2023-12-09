import { Redirect, Slot, Stack } from 'expo-router'

import { useAuthStore } from '$infra/auth'

export default function SignInLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  if (isAuthenticated) return <Redirect href="/" />
  return (
    <>
      <Stack.Screen options={{ animation: 'none' }} />
      <Slot />
    </>
  )
}
