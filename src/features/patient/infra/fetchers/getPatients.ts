import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { Patient } from '$types/database'

export const getPatients = async (): Promise<Patient[]> => {
  const practitionnerId = useAuthStore.getState().profile!.id
  const equipment = await supabase.from('patients').select().eq('practitionnerId', practitionnerId)
  return equipment.data ?? []
}
