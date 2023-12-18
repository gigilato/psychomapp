import { supabase } from '$infra/libs/supabase'
import { Equipment } from '$types/database'

export const getEquipment = async (id: string): Promise<Equipment> => {
  const equipment = await supabase.from('equipments').select().eq('id', id).single()
  if (!equipment.data) throw new Error('Equipment not found')
  return equipment.data
}
