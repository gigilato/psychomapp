import { Redirect } from 'expo-router'

import { useAuthStore } from '$infra/auth'

export default function AppRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) return <Redirect href="/sign-in" />
  return <Redirect href="/dashboard/" />
}
