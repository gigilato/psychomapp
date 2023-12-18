import { supabase } from '$infra/libs/supabase'
import { slugify } from '$libs/strings'
import { Database, Equipment } from '$types/database'

export type UpdateEquipmentVariables = Pick<
  Database['public']['Tables']['equipments']['Update'],
  'name'
>

export const updateEquipment = async (
  current: Equipment,
  params: Required<UpdateEquipmentVariables>
) => {
  const slug = slugify(params.name)
  const data = { ...params, slug }
  const result = await supabase.from('equipments').update(data).eq('id', current.id)
  return { result, data: { ...current, ...data } }
}
