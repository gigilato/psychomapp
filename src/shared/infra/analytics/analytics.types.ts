export type AnalyticsProperties = Record<string, string | undefined>
export type AnalyticsConsents = {
  ga: boolean
}

export type AnalyticsState = {
  currentScreen: string
  currentUserId: string | undefined
  consents: {
    ga: boolean
  }
}
