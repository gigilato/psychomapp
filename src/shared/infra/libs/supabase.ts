import { createClient } from '@supabase/supabase-js'
import { MMKV } from 'react-native-mmkv'

import { config } from '$config'

const { anon, url } = config.supabase

const mmkv = new MMKV({ id: 'storage' })
const storage = {
  getItem: (key: string) => mmkv.getString(key) ?? null,
  setItem: (key: string, value: string) => mmkv.set(key, value),
  removeItem: (key: string) => mmkv.delete(key),
}

export const supabase = createClient(url, anon, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
