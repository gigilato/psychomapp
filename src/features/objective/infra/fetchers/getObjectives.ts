import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { Objective } from '$types/database'

export const getObjectives = async (): Promise<Objective[]> => {
  const practitionnerId = useAuthStore.getState().profile!.id
  const result = await supabase
    .from('objectives')
    .select()
    .eq('practitionnerId', practitionnerId)
    .order('createdAt', { ascending: false })
  return result.data ?? []
}
