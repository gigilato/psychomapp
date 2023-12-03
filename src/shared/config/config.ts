import Constants from 'expo-constants'

export type EnvName = 'dev' | 'staging' | 'production'

export const config = {
  env: (Constants?.expoConfig?.extra?.APP_ENV as EnvName | undefined) ?? 'dev',
  sentry: {
    dns: 'https://7d20641da3e6f34e60c7d53a1be2c55f@o294118.ingest.sentry.io/4506330741145600',
  },
}
