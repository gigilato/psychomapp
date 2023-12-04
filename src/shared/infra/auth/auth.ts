import { supabase } from '$infra/libs/supabase'

export const signIn = (email: string, password: string) => {
  return supabase.auth.signInWithPassword({ email, password })
}

export const signOut = () => {
  return supabase.auth.signOut()
}

export const restoreSession = () => {
  return supabase.auth.getSession()
}

export const resetPassword = (email: string) => {
  return supabase.auth.resetPasswordForEmail(email)
}
