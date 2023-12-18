import { zodResolver } from '@hookform/resolvers/zod'
import { router } from 'expo-router'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from 'react-native'
import { z } from 'zod'

import { useCreatePatient } from '$features/patient/infra/controllers/useCreatePatient'
import { stringSchema } from '$forms/libs/form.schemas'

export const PatientFormSchema = z
  .object({
    firstname: stringSchema,
    lastname: stringSchema,
    birthdate: z.string(),
  })
  .required()

export type PatientFormType = z.infer<typeof PatientFormSchema>

export const usePatientForm = () => {
  const lastnameRef = useRef<TextInput>(null)

  const form = useForm<PatientFormType>({
    resolver: zodResolver(PatientFormSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      birthdate: '',
    },
    mode: 'onBlur',
  })

  const { mutateAsync, isPending } = useCreatePatient()

  const onPressSubmit = form.handleSubmit((formData) => {
    mutateAsync(formData).then(() => router.back())
  })

  return { lastnameRef, form, onPressSubmit, isPending }
}
