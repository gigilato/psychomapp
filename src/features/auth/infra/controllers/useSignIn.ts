import { useMutation } from '@tanstack/react-query'

import { signInAsync } from '$infra/auth'

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
      // TODO: handle error
    },
  })

  return signInMutation
}
