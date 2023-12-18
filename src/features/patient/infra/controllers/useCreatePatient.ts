import { useMutation } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'

import { CreatePatientVariables, createPatient, getPatient } from '../fetchers'

export const useCreatePatient = () => {
  const mutation = useMutation({
    mutationFn: async (variables: CreatePatientVariables) => {
      const { result, data } = await createPatient(variables)
      if (result.status !== 201) throw new Error('CreatePatientError')
      const equipment = await getPatient(data.id)
      return equipment
    },
    onError: () => {
      showToast(i18n.t('errors.default'))
    },
  })
  return mutation
}
