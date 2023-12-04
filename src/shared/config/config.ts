export type EnvName = 'dev' | 'staging' | 'production'

const env = process.env.EXPO_PUBLIC_ENV as EnvName
export const config = {
  env,
  enableAnalytics: env !== 'dev',
  sentry: {
    dns: 'https://7d20641da3e6f34e60c7d53a1be2c55f@o294118.ingest.sentry.io/4506330741145600',
  },
  supabase: {
    url: process.env.EXPO_PUBLIC_SUPABASE_URL!,
    anon: process.env.EXPO_PUBLIC_SUPABASE_ANON!,
    serviceRole: process.env.EXPO_PUBLIC_SUPABASE_SERVICE!,
  },
}
