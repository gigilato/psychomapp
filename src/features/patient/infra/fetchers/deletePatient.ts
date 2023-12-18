import { supabase } from '$infra/libs/supabase'

export const deletePatient = async (id: string) => {
  const result = await supabase.from('patients').delete().eq('id', id)
  return result
}
