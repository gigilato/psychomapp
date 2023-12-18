import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'

import { queryKey } from './usePatients'
import { CreatePatientVariables, createPatient, getPatient } from '../fetchers'

export const useCreatePatient = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: CreatePatientVariables) => {
      const { result, data } = await createPatient(variables)
      if (result.status !== 201) throw new Error('CreatePatientError')
      const patient = await getPatient(data.id)
      return patient
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey })
    },
    onError: () => {
      showToast(i18n.t('errors.default'))
    },
  })
  return mutation
}
