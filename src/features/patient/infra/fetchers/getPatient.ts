import { supabase } from '$infra/libs/supabase'
import { PatientWithObjectives, patientWithObjectiveFragment } from '$types/database'

export const getPatient = async (id: string): Promise<PatientWithObjectives> => {
  const result = await supabase
    .from('patients')
    .select(patientWithObjectiveFragment)
    .eq('id', id)
    .single()
  if (!result.data) throw new Error('Patient not found')
  return result.data
}
