import { get } from 'lodash'

import { DeepKey, DeepValue } from '$types/common'

export type EnvName = 'dev' | 'preview' | 'production'

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

type Config = typeof config

export const getConfig = <Selector extends DeepKey<Config>>(
  selector: Selector
): DeepValue<Config, Selector> => {
  return get(config, selector) as DeepValue<Config, Selector>
}
