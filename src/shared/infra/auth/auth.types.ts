import { Practitionner } from '$types/database'

export type AuthState = {
  hasSessionRestored: boolean
  isAuthenticated: boolean
  profile: Practitionner | undefined
}
