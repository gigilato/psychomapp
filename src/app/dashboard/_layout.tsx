import { Redirect, Stack, Tabs } from 'expo-router'

import { TabBar } from '$features/navigation/views'
import { useAuthStore } from '$infra/auth'

export default function DashboardLayout() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)

  if (!isAuthenticated) return <Redirect href="/sign-in/" />

  return (
    <>
      <Stack.Screen options={{ animation: 'none' }} />
      <Tabs
        initialRouteName="dashboard"
        tabBar={(props) => <TabBar {...props} />}
        screenOptions={{ headerShown: false }}
      />
    </>
  )
}
