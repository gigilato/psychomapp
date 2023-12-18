import { useQuery } from '@tanstack/react-query'

import { getPatients } from '../fetchers'

export const queryKey = ['patients']
export const usePatients = () => {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getPatients()
    },
  })
  return query
}
