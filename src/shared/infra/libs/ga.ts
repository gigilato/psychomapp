import analytics from '@react-native-firebase/analytics'

export const setUser = (currentUserId: string) => analytics().setUserId(currentUserId)

export const setUserProperty = (name: string, value?: string) =>
  analytics().setUserProperty(name, value ?? null)

export const clearUser = () => analytics().setUserId(null)

export const logEvent = (
  name: string,
  screenName: string,
  properties?: Record<string, string | undefined>
) => analytics().logEvent(name, { screenName, ...properties })

export const logScreen = (screen: string, properties?: Record<string, string | undefined>) =>
  analytics().logEvent('screen_view', {
    screen_name: screen,
    ...properties,
  })
