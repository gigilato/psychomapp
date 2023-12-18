import { Database } from './generated'

export type Practitionner = Database['public']['Tables']['practitionners']['Row']
export type Equipment = Database['public']['Tables']['equipments']['Row']
export type Patient = Database['public']['Tables']['patients']['Row']
export type Objective = Database['public']['Tables']['objectives']['Row']
