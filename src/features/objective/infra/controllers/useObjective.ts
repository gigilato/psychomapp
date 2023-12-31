import { useQuery } from '@tanstack/react-query'

import { getObjective } from '../fetchers'

export const getQueryKey = (id: string) => ['objectives', id]
export const useObjective = (id?: string) => {
  const query = useQuery({
    queryKey: getQueryKey(id!),
    queryFn: async () => {
      return getObjective(id!)
    },
    enabled: !!id,
  })
  return query
}
