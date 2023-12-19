import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'
import { Patient } from '$types/database'

import { queryKey } from './usePatients'
import { UpdatePatientVariables, updatePatient } from '../fetchers'

export const useUpdatePatient = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: UpdatePatientVariables) => {
      const { result, data } = await updatePatient(variables)
      if (result.status !== 204) throw new Error('UpdatePatientError')
      return data
    },
    onMutate: async ({ current, update }) => {
      await queryClient.cancelQueries({ queryKey })
      const previous = queryClient.getQueryData<Patient[]>(queryKey)
      if (!previous) return
      const updated = previous?.map((item) => {
        if (item.id === current.id) {
          return { ...item, ...update }
        }
        return item
      })
      queryClient.setQueryData<Patient[]>(queryKey, updated)
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
