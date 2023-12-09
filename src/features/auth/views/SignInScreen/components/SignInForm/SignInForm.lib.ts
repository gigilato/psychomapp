import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from 'react-native'
import { z } from 'zod'

import { useSignIn } from '$features/auth/infra/controllers/useSignIn'
import { emailSchema, stringSchema } from '$forms/libs/form.schemas'
import { resetPasswordAsync } from '$infra/auth'
import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'

export const SignInFormSchema = z
  .object({
    email: emailSchema,
    password: stringSchema,
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

  const { mutate, isPending } = useSignIn()

  const onPressSubmit = form.handleSubmit((formData) => {
    mutate(formData)
  })

  const onPressForgotPassword = () => {
    const { email } = form.getValues()
    const { success } = emailSchema.safeParse(email)
    if (!success) {
      showToast(i18n.t('signIn.invalidEmail'))
      return
    }
    resetPasswordAsync(email)
    showToast(i18n.t('signIn.resetPassword'))
  }

  return { passwordRef, form, onPressSubmit, isPending, onPressForgotPassword }
}
