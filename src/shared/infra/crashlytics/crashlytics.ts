import { Breadcrumb } from './crashlytics.types'
import * as sentry from '../libs/sentry'

export const init = () => sentry.init()

export const addBreadcrumb = (breadcrumb: Breadcrumb) => sentry.addBreadcrumb(breadcrumb)

export const captureException = (exception: unknown) => sentry.captureException(exception)
