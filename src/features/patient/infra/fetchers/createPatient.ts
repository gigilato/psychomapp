import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { generateUuid } from '$libs/crypto'
import { slugify } from '$libs/strings'
import { Database } from '$types/database'

export type CreatePatientVariables = Omit<
  Database['public']['Tables']['patients']['Insert'],
  'createdAt' | 'updatedAt' | 'id' | 'practitionnerId' | 'slug'
>

export const createPatient = async (params: CreatePatientVariables) => {
  const id = generateUuid()
  const practitionnerId = useAuthStore.getState().profile!.id
  const slug = slugify(`${params.firstname} ${params.lastname}`)
  const data = { ...params, id, practitionnerId, slug }
  const result = await supabase.from('patients').insert(data)
  return { result, data }
}
