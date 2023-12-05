import { create } from 'zustand'

import * as analytics from '$infra/analytics'
import { supabase } from '$infra/libs/supabase'

import { AuthState } from './auth.types'

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  hasSessionRestored: false,
  userId: undefined,
}))

export const signInAsync = async (email: string, password: string) => {
  const response = await supabase.auth.signInWithPassword({ email, password })
  const userId = response.data.session?.user.id
  if (userId) {
    analytics.setUser(userId)
    analytics.logEvent('sign_in_success')
    useAuthStore.setState({
      isAuthenticated: true,
      userId,
    })
  }
  return response
}

export const signOutAsync = () => {
  useAuthStore.setState({ isAuthenticated: false, userId: undefined })
  analytics.logEvent('sign_out')
  analytics.clearUser()
  return supabase.auth.signOut()
}

export const restoreSessionAsync = async () => {
  try {
    const response = await supabase.auth.getSession()
    const userId = response.data.session?.user.id
    if (userId) {
      analytics.setUser(userId)
      analytics.logEvent('session_restored')
      useAuthStore.setState({
        isAuthenticated: true,
        userId,
      })
    }
  } catch {
  } finally {
    useAuthStore.setState({
      hasSessionRestored: true,
    })
  }
}

export const resetPasswordAsync = (email: string) => {
  return supabase.auth.resetPasswordForEmail(email)
}
