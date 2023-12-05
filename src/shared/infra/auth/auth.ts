import { create } from 'zustand'

import * as analytics from '$infra/analytics'
import { supabase } from '$infra/libs/supabase'
import { Log } from '$infra/logger'
import { Practitionner } from '$types/database'

import { AuthState } from './auth.types'

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  hasSessionRestored: false,
  profile: undefined,
}))

const getProfile = async (event: string, id?: string) => {
  if (!id) return
  const { data, error } = await supabase.from('practitionners').select()
  if (error || data?.length === 0) throw new Error('ProfileNotFoundError')

  const profile = data[0] as Practitionner
  analytics.setUser(id)
  analytics.logEvent(event)
  useAuthStore.setState({
    isAuthenticated: true,
    profile,
  })
}

export const signInAsync = async (email: string, password: string) => {
  const response = await supabase.auth.signInWithPassword({ email, password })
  if (response.error) throw new Error('SignInError')
  const userId = response.data.session?.user.id
  await getProfile('sign_in_success', userId)
}

export const signOutAsync = async () => {
  useAuthStore.setState({ isAuthenticated: false, profile: undefined })
  analytics.logEvent('sign_out')
  analytics.clearUser()
  await supabase.auth.signOut()
}

export const restoreSessionAsync = async () => {
  try {
    const response = await supabase.auth.getSession()
    if (response.error) throw new Error('RestoreSessionError')
    const userId = response.data.session?.user.id
    await getProfile('session_restored', userId)
  } catch (error: any) {
    Log.e(error.message)
  } finally {
    useAuthStore.setState({
      hasSessionRestored: true,
    })
  }
}

export const resetPasswordAsync = async (email: string) => {
  await supabase.auth.resetPasswordForEmail(email)
}
