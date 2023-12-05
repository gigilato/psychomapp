import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from 'react-native'
import { z } from 'zod'

import { useSignIn } from '$features/auth/infra/controllers/useSignIn'

export const SignInFormSchema = z
  .object({
    email: z.string().min(1, 'Champs requis').email('Email incorrect'),
    password: z.string().min(1, 'Champs requis'),
  })
  .required()
export type SignInFormType = z.infer<typeof SignInFormSchema>

export const useSignInForm = () => {
  const passwordRef = useRef<TextInput>(null)

  const form = useForm<SignInFormType>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  })

  const { mutateAsync, isPending } = useSignIn()

  const onPressSubmit = form.handleSubmit((formData) => {
    mutateAsync(formData)
  })

  return { passwordRef, form, onPressSubmit, isPending }
}
