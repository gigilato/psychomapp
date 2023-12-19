import { supabase } from '$infra/libs/supabase'
import { slugify } from '$libs/strings'
import { Database, Patient } from '$types/database'

export type UpdatePatientVariables = {
  current: Patient
  update: Pick<
    Database['public']['Tables']['patients']['Update'],
    'firstname' | 'lastname' | 'birthdate'
  >
}

export const updatePatient = async ({ current, update }: UpdatePatientVariables) => {
  const slug = slugify(
    `${update.firstname ?? current.firstname} ${update.lastname ?? current.firstname}`
  )
  const payload = { ...update, slug, updatedAt: new Date().toISOString() }
  const result = await supabase.from('patients').update(payload).eq('id', current.id)
  const data = { ...current, ...payload }
  return { result, data }
}
