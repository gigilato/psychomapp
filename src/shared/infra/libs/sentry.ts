import { Platform } from 'react-native'
import * as Sentry from 'sentry-expo'

import { getConfig } from '$config'

const channel = getConfig('channel')
const sentry = getConfig('sentry')

export const init = () =>
  Sentry.init({
    dsn: sentry.dns,
    enableInExpoDevelopment: false,
    enableNative: false,
    debug: channel !== 'production',
  })

export const addBreadcrumb = (breadcrumb: Sentry.Browser.Breadcrumb) =>
  Platform.OS === 'web'
    ? Sentry.Browser.addBreadcrumb(breadcrumb)
    : Sentry.Native.addBreadcrumb(breadcrumb)

export const captureException = (exception: unknown) =>
  Platform.OS === 'web'
    ? Sentry.Browser.captureException(exception)
    : Sentry.Native.captureException(exception)

export const setUser = (userId: string) =>
  Platform.OS === 'web'
    ? Sentry.Browser.setUser({ id: userId })
    : Sentry.Native.setUser({ id: userId })

export const clearUser = () =>
  Platform.OS === 'web' ? Sentry.Browser.setUser(null) : Sentry.Native.setUser(null)

export const logScreen = (screen: string, properties?: Record<string, string | undefined>) =>
  addBreadcrumb({
    category: 'navigation',
    message: screen,
    level: 'info',
  })
