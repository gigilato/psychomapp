import { supabase } from '$infra/libs/supabase'
import { slugify } from '$libs/strings'
import { Database, Objective } from '$types/database'

export type UpdateObjectiveVariables = {
  current: Objective
  update: Required<Pick<Database['public']['Tables']['objectives']['Update'], 'name'>>
}

export const updateObjective = async ({ current, update }: UpdateObjectiveVariables) => {
  const slug = slugify(update.name)
  const payload = { ...update, slug, updatedAt: new Date().toISOString() }
  const result = await supabase.from('objectives').update(payload).eq('id', current.id)
  const data = { ...current, ...payload }
  return { result, data }
}
