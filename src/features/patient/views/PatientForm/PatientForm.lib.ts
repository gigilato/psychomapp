import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { TextInput } from 'react-native'
import { z } from 'zod'

import { useCreatePatient } from '$features/patient/infra/controllers/useCreatePatient'
import { usePatient } from '$features/patient/infra/controllers/usePatient'
import { useUpdatePatient } from '$features/patient/infra/controllers/useUpdatePatient'
import { stringSchema } from '$forms/libs/form.schemas'

export const PatientFormSchema = z
  .object({
    firstname: stringSchema,
    lastname: stringSchema,
    birthdate: z.string(),
  })
  .required()

export type PatientFormType = z.infer<typeof PatientFormSchema>

export const usePatientForm = (onSubmit: () => void, patientId?: string) => {
  const lastnameRef = useRef<TextInput>(null)

  const { data: current } = usePatient(patientId)

  const form = useForm<PatientFormType>({
    resolver: zodResolver(PatientFormSchema),
    defaultValues: {
      firstname: current?.firstname ?? '',
      lastname: current?.lastname ?? '',
      birthdate: current?.birthdate ?? '',
    },
    mode: 'onBlur',
  })

  const { mutateAsync: createAsync, isPending: isCreating } = useCreatePatient()
  const { mutateAsync: updateAsync, isPending: isUpdating } = useUpdatePatient()

  const onPressSubmit = form.handleSubmit((formData) => {
    if (patientId) updateAsync({ current: current!, update: formData }).then(() => onSubmit())
    else createAsync(formData).then(() => onSubmit())
  })

  return { lastnameRef, form, onPressSubmit, isPending: patientId ? isUpdating : isCreating }
}
