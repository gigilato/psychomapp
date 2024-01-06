import { supabase } from '$infra/libs/supabase'
import { Objective } from '$types/database'

export type DeleteObjectiveVariables = Objective

export const deleteObjective = async (id: string) => {
  const result = await supabase.from('objectives').delete().eq('id', id)
  return result
}
