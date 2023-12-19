import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'
import { Patient } from '$types/database'

import { queryKey } from './usePatients'
import { DeletePatientVariables, deletePatient } from '../fetchers'

export const useDeletePatient = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: DeletePatientVariables) => {
      const result = await deletePatient(variables.id)
      if (result.status !== 204) throw new Error('DeletePatientError')
      return variables
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey })
      const previous = queryClient.getQueryData<Patient[]>(queryKey)
      queryClient.setQueryData<Patient[]>(
        queryKey,
        (current) => current?.filter((item) => item.id !== variables.id)
      )
      return { previous }
    },
    onError: (_, variables, context) => {
      if (context?.previous) queryClient.setQueryData<Patient[]>(queryKey, context.previous)
      showToast(i18n.t('errors.default'))
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
  return mutation
}
