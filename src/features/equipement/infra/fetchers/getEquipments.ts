import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { Equipment } from '$types/database'

export const getEquipments = async (): Promise<Equipment[]> => {
  const practitionnerId = useAuthStore.getState().profile!.id
  const equipment = await supabase
    .from('equipments')
    .select()
    .eq('practitionnerId', practitionnerId)
  return equipment.data ?? []
}
