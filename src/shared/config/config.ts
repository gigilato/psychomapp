import * as Updates from 'expo-updates'
import { get } from 'lodash'

import { DeepKey, DeepValue } from '$types/common'

export type EnvName = 'dev' | 'preview' | 'production'

const channel = !Updates.channel || Updates.channel === '' ? 'dev' : (Updates.channel as EnvName)

export const config = {
  channel,
  enableAnalytics: channel !== 'dev',
  sentry: {
    dns: 'https://7d20641da3e6f34e60c7d53a1be2c55f@o294118.ingest.sentry.io/4506330741145600',
  },
  supabase: {
    url: 'https://kzpjuxpqzrvnbjjbcjeh.supabase.co',
    anon: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cGp1eHBxenJ2bmJqamJjamVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1MzY5NTUsImV4cCI6MjAxNzExMjk1NX0.vChmLoV0dPUx8p1tidVmlesjs3yt3BhTJWRB3fG04NU',
    serviceRole:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cGp1eHBxenJ2bmJqamJjamVoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTUzNjk1NSwiZXhwIjoyMDE3MTEyOTU1fQ.txE_EwZ_Pqx4QW6fnJ48RdD7Ikw9j_RopJXdP_HnQGU',
  },
}

type Config = typeof config

export const getConfig = <Selector extends DeepKey<Config>>(
  selector: Selector
): DeepValue<Config, Selector> => {
  return get(config, selector) as DeepValue<Config, Selector>
}
