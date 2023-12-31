import { supabase } from '$infra/libs/supabase'
import { Patient } from '$types/database'

export const getPatient = async (id: string): Promise<Patient> => {
  const result = await supabase.from('patients').select().eq('id', id).single()
  if (!result.data) throw new Error('Patient not found')
  return result.data
}
