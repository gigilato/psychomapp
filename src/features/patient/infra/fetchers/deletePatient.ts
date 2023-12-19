import { supabase } from '$infra/libs/supabase'
import { Patient } from '$types/database'

export type DeletePatientVariables = Patient

export const deletePatient = async (id: string) => {
  const result = await supabase.from('patients').delete().eq('id', id)
  return result
}
