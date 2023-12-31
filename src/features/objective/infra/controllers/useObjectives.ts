import { useQuery } from '@tanstack/react-query'

import { getObjectives } from '../fetchers'

export const queryKey = ['objectives']
export const useObjectives = () => {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getObjectives()
    },
  })
  return query
}
