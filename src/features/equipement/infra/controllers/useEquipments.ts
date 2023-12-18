import { useQuery } from '@tanstack/react-query'

import { getEquipments } from '../fetchers'

export const queryKey = ['equipments']
export const useEquipments = () => {
  const query = useQuery({
    queryKey,
    queryFn: async () => {
      return getEquipments()
    },
  })
  return query
}
