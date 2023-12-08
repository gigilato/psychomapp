import { createClient } from '@supabase/supabase-js'
import { MMKV } from 'react-native-mmkv'

import { getConfig } from '$config'
import { Database } from '$types/database/generated'

const { anon, url } = getConfig('supabase')

const mmkv = new MMKV({ id: 'storage' })
const storage = {
  getItem: (key: string) => mmkv.getString(key) ?? null,
  setItem: (key: string, value: string) => mmkv.set(key, value),
  removeItem: (key: string) => mmkv.delete(key),
}

export const supabase = createClient<Database>(url, anon, {
  auth: {
    storage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
