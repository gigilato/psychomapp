import { useQuery } from '@tanstack/react-query'

import { getPatient } from '../fetchers'

export const getQueryKey = (id: string) => ['patients', id]
export const usePatient = (id: string) => {
  const query = useQuery({
    queryKey: getQueryKey(id),
    queryFn: async () => {
      return getPatient(id)
    },
  })
  return query
}
