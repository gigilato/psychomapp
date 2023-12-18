import { supabase } from '$infra/libs/supabase'

export const deleteEquipment = async (id: string) => {
  const result = await supabase.from('equipments').delete().eq('id', id)
  return result
}
