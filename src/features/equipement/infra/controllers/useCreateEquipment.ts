import { useMutation } from '@tanstack/react-query'

import { i18n } from '$infra/i18n'
import { showToast } from '$infra/toast'

import { CreateEquipmentVariables, createEquipment, getEquipment } from '../fetchers'

export const useCreateEquipment = () => {
  const mutation = useMutation({
    mutationFn: async (variables: CreateEquipmentVariables) => {
      const { result, data } = await createEquipment(variables)
      if (result.status !== 201) throw new Error('CreateEquipmentError')
      const equipment = await getEquipment(data.id)
      return equipment
    },
    onError: () => {
      showToast(i18n.t('errors.default'))
    },
  })
  return mutation
}
