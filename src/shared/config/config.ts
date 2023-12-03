export type EnvName = 'dev' | 'staging' | 'production'

export const config = {
  env: process.env.EXPO_PUBLIC_ENV as EnvName,
  sentry: {
    dns: 'https://7d20641da3e6f34e60c7d53a1be2c55f@o294118.ingest.sentry.io/4506330741145600',
  },
}
