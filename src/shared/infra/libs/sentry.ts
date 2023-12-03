import { Platform } from 'react-native'
import * as Sentry from 'sentry-expo'

import { config } from '$config'

const { sentry, env } = config

export const init = () =>
  Sentry.init({
    dsn: sentry.dns,
    enableInExpoDevelopment: true,
    debug: env !== 'production',
  })

export const addBreadcrumb = (breadcrumb: Sentry.Browser.Breadcrumb) =>
  Platform.OS === 'web'
    ? Sentry.Browser.addBreadcrumb(breadcrumb)
    : Sentry.Native.addBreadcrumb(breadcrumb)

export const captureException = (exception: unknown) =>
  Platform.OS === 'web'
    ? Sentry.Browser.captureException(exception)
    : Sentry.Native.captureException(exception)

export const logScreen = (screen: string, properties?: Record<string, string | undefined>) =>
  addBreadcrumb({
    category: 'navigation',
    message: screen,
    level: 'info',
  })
