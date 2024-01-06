import { useMutation, useQueryClient } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'
import { Objective } from '$types/database'

import { queryKey } from './useObjectives'
import { UpdateObjectiveVariables, updateObjective } from '../fetchers'

export const useUpdateObjective = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (variables: UpdateObjectiveVariables) => {
      const { result, data } = await updateObjective(variables)
      if (result.status !== 204) throw new Error('UpdateObjectiveError')
      return data
    },
    onMutate: async ({ current, update }) => {
      await queryClient.cancelQueries({ queryKey })
      const previous = queryClient.getQueryData<Objective[]>(queryKey)
      if (!previous) return
      const updated = previous?.map((item) => {
        if (item.id === current.id) {
          return { ...item, ...update }
        }
        return item
      })
      queryClient.setQueryData<Objective[]>(queryKey, updated)
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
