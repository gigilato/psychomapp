import { create } from 'zustand'

import { config } from '$config'

import { AnalyticsConsents, AnalyticsProperties, AnalyticsState } from './analytics.types'
import * as ga from '../libs/ga'
import * as sentry from '../libs/sentry'

const { enableAnalytics } = config

export const useAnalyticsStore = create<AnalyticsState>((set, get) => ({
  currentUserId: undefined,
  currentScreen: '',
  consents: {
    ga: true,
  },
}))

export const setCurrentScreen = (currentScreen: string) =>
  useAnalyticsStore.setState({ currentScreen })

export const setConsents = (consents: AnalyticsConsents) => useAnalyticsStore.setState({ consents })

export const setUser = (currentUserId: string) => {
  sentry.setUser(currentUserId)
  if (!enableAnalytics) return
  const { consents } = useAnalyticsStore.getState()
  if (consents.ga) ga.setUser(currentUserId)
}

export const setUserProperty = (name: string, value: string) => {
  if (!enableAnalytics) return
  const { consents } = useAnalyticsStore.getState()
  if (consents.ga) ga.setUserProperty(name, value)
}

export const clearUser = () => {
  sentry.clearUser()
  if (!enableAnalytics) return
  ga.clearUser()
}

export const logEvent = (name: string, properties?: AnalyticsProperties) => {
  if (!enableAnalytics) return
  const { consents, currentScreen } = useAnalyticsStore.getState()
  if (consents.ga) ga.logEvent(name, currentScreen, properties)
}

export const logScreen = (screen: string, properties?: AnalyticsProperties) => {
  sentry.logScreen(screen)
  if (!enableAnalytics) return
  const { consents } = useAnalyticsStore.getState()
  if (consents.ga) ga.logScreen(screen, properties)
}
