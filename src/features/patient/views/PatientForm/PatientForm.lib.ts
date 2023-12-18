import { zodResolver } from '@hookform/resolvers/zod'
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

  const { mutate, isPending } = useCreatePatient()

  const onPressSubmit = form.handleSubmit((formData) => {
    mutate(formData)
  })

  return { lastnameRef, form, onPressSubmit, isPending }
}
