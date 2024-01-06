import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { PatientWithObjectives, patientWithObjectiveFragment } from '$types/database'

export const getPatients = async (): Promise<PatientWithObjectives[]> => {
  const practitionnerId = useAuthStore.getState().profile!.id
  const result = await supabase
    .from('patients')
    .select(patientWithObjectiveFragment)
    .eq('practitionnerId', practitionnerId)
  return result.data ?? []
}
