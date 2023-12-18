import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { generateUuid } from '$libs/crypto'
import { slugify } from '$libs/strings'
import { Database } from '$types/database'

export type CreateEquipmentVariables = Pick<
  Database['public']['Tables']['equipments']['Insert'],
  'name'
>

export const createEquipment = async (params: CreateEquipmentVariables) => {
  const id = generateUuid()
  const practitionnerId = useAuthStore.getState().profile!.id
  const slug = slugify(params.name)
  const data = { ...params, id, practitionnerId, slug }
  const result = await supabase.from('equipments').insert(data)
  return { result, data }
}
