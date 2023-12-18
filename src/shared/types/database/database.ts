import { Database } from './generated'

export type Practitionner = Database['public']['Tables']['practitionners']['Row']
export type Equipment = Database['public']['Tables']['equipments']['Row']
export type Patient = Omit<Database['public']['Tables']['patients']['Row'], 'slug'>
export type Objective = Database['public']['Tables']['objectives']['Row']
