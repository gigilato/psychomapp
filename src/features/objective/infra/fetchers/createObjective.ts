import { random } from 'lodash'

import { useAuthStore } from '$infra/auth'
import { supabase } from '$infra/libs/supabase'
import { generateUuid } from '$libs/crypto'
import { slugify } from '$libs/strings'
import { tagColors } from '$theme'
import { Database } from '$types/database'

export type CreateObjectiveVariables = Pick<
  Database['public']['Tables']['objectives']['Insert'],
  'name'
>

export const createObjective = async ({ name }: CreateObjectiveVariables) => {
  const id = generateUuid()
  const practitionnerId = useAuthStore.getState().profile!.id
  const slug = slugify(name)
  const colorKeys = Object.keys(tagColors) as (keyof typeof tagColors)[]
  const colorKey = colorKeys[random(0, colorKeys.length - 1)]
  const color = tagColors[colorKey].strong
  const data = { name, id, practitionnerId, slug, color }
  const result = await supabase.from('objectives').insert(data)
  return { result, data }
}
