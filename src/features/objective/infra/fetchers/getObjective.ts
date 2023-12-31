import { supabase } from '$infra/libs/supabase'
import { Objective } from '$types/database'

export const getObjective = async (id: string): Promise<Objective> => {
  const result = await supabase.from('objectives').select().eq('id', id).single()
  if (!result.data) throw new Error('Objective not found')
  return result.data
}
