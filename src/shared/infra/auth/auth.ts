import { create } from 'zustand'

import { AuthState } from '$infra/auth/auth.types'
import { supabase } from '$infra/libs/supabase'

export const useAuthStore = create<AuthState>((set, get) => ({
  isAuthenticated: false,
  hasSessionRestored: false,
  userId: undefined,
}))

export const signInAsync = async (email: string, password: string) => {
  const response = await supabase.auth.signInWithPassword({ email, password })
  const userId = response.data.session?.user.id
  if (userId)
    useAuthStore.setState({
      isAuthenticated: true,
      userId,
    })
  return response
}

export const signOutAsync = () => {
  useAuthStore.setState({ isAuthenticated: false, userId: undefined })
  return supabase.auth.signOut()
}

export const restoreSessionAsync = async () => {
  try {
    const response = await supabase.auth.getSession()
    const userId = response.data.session?.user.id
    if (userId)
      useAuthStore.setState({
        isAuthenticated: true,
        userId,
      })
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
