import { useMutation } from '@tanstack/react-query'

import { signInAsync } from '$infra/auth'
import { showToast } from '$infra/toast'

type Variables = {
  email: string
  password: string
}
export const useSignIn = () => {
  const signInMutation = useMutation({
    mutationFn: ({ email, password }: Variables) => {
      return signInAsync(email, password)
    },
    onError: () => {
      showToast('Connexion impossible, vérifiez vos identifiants.')
    },
  })

  return signInMutation
}
