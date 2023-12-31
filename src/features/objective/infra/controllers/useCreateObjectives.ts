import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'

import { queryKey } from './useObjectives'
import { CreateObjectiveVariables, createObjective, getObjective } from '../fetchers'

export const useCreateObjective = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: CreateObjectiveVariables) => {
      const { result, data } = await createObjective(variables)
      if (result.status !== 201) throw new Error('CreateObjectiveError')
      const objective = await getObjective(data.id)
      return objective
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
