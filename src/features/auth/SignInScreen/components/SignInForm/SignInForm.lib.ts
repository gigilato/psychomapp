import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from 'react-native'
import { z } from 'zod'

import { signInAsync } from '$infra/auth'

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

  const onPressSubmit = form.handleSubmit(({ email, password }) => {
    signInAsync(email, password)
  })

  return { passwordRef, form, onPressSubmit }
}
