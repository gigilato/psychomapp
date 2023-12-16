import { Redirect, Stack } from 'expo-router'

import { SignInScreen } from '$features/auth/views'
import { useAuthStore } from '$infra/auth'

export default function SignInRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  if (isAuthenticated) return <Redirect href="/" />
  return (
    <>
      <Stack.Screen options={{ animation: 'none' }} />
      <SignInScreen />
    </>
  )
}
