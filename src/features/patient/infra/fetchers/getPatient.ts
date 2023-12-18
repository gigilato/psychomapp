import { supabase } from '$infra/libs/supabase'
import { Patient } from '$types/database'

export const getPatient = async (id: string): Promise<Patient> => {
  const equipment = await supabase.from('patients').select().eq('id', id).single()
  if (!equipment.data) throw new Error('Patient not found')
  return equipment.data
}
