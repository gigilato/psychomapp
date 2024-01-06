import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'
import { Objective } from '$types/database'

import { queryKey } from './useObjectives'
import { DeleteObjectiveVariables, deleteObjective } from '../fetchers'

export const useDeleteObjective = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: DeleteObjectiveVariables) => {
      const result = await deleteObjective(variables.id)
      if (result.status !== 204) throw new Error('DeleteObjectiveError')
      return variables
    },
    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey })
      const previous = queryClient.getQueryData<Objective[]>(queryKey)
      queryClient.setQueryData<Objective[]>(
        queryKey,
        (current) => current?.filter((item) => item.id !== variables.id)
      )
      return { previous }
    },
    onError: (_, variables, context) => {
      if (context?.previous) queryClient.setQueryData<Objective[]>(queryKey, context.previous)
      showToast(i18n.t('errors.default'))
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey })
    },
  })
  return mutation
}
