export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          assessmentId: string | null
          createdAt: string
          endAt: string
          id: string
          patientId: string
          startAt: string
          status: string
          updatedAt: string
        }
        Insert: {
          assessmentId?: string | null
          createdAt?: string
          endAt: string
          id?: string
          patientId: string
          startAt: string
          status?: string
          updatedAt?: string
        }
        Update: {
          assessmentId?: string | null
          createdAt?: string
          endAt?: string
          id?: string
          patientId?: string
          startAt?: string
          status?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'appointments_assessmentId_fkey'
            columns: ['assessmentId']
            isOneToOne: false
            referencedRelation: 'assessments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'appointments_patientId_fkey'
            columns: ['patientId']
            isOneToOne: false
            referencedRelation: 'patients'
            referencedColumns: ['id']
          },
        ]
      }
      assessments: {
        Row: {
          createdAt: string
          id: string
          patientId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          patientId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          patientId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'assessments_patientId_fkey'
            columns: ['patientId']
            isOneToOne: false
            referencedRelation: 'patients'
            referencedColumns: ['id']
          },
        ]
      }
      contacts: {
        Row: {
          createdAt: string
          email: string | null
          firstname: string | null
          id: number
          lastname: string | null
          patientId: string
          phone: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string
          email?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          patientId: string
          phone?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string
          email?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          patientId?: string
          phone?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'contacts_patientId_fkey'
            columns: ['patientId']
            isOneToOne: false
            referencedRelation: 'patients'
            referencedColumns: ['id']
          },
        ]
      }
      equipments: {
        Row: {
          createdAt: string
          id: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          practitionnerId?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'equipments_practitionnerId_fkey'
            columns: ['practitionnerId']
            isOneToOne: false
            referencedRelation: 'practitionners'
            referencedColumns: ['id']
          },
        ]
      }
      equipmentsForMediator: {
        Row: {
          createdAt: string
          equipmentId: string
          id: string
          mediatorId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          equipmentId: string
          id?: string
          mediatorId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          equipmentId?: string
          id?: string
          mediatorId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'equipmentsForMediator_equipmentId_fkey'
            columns: ['equipmentId']
            isOneToOne: false
            referencedRelation: 'equipments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'equipmentsForMediator_mediatorId_fkey'
            columns: ['mediatorId']
            isOneToOne: false
            referencedRelation: 'mediators'
            referencedColumns: ['id']
          },
        ]
      }
      equipmentsForTest: {
        Row: {
          createdAt: string
          equipmentId: string
          id: string
          testId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          equipmentId: string
          id?: string
          testId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          equipmentId?: string
          id?: string
          testId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'equipmentsForTest_equipmentId_fkey'
            columns: ['equipmentId']
            isOneToOne: false
            referencedRelation: 'equipments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'equipmentsForTest_testId_fkey'
            columns: ['testId']
            isOneToOne: false
            referencedRelation: 'tests'
            referencedColumns: ['id']
          },
        ]
      }
      mediators: {
        Row: {
          createdAt: string
          id: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          practitionnerId?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'mediators_practitionnerId_fkey'
            columns: ['practitionnerId']
            isOneToOne: false
            referencedRelation: 'practitionners'
            referencedColumns: ['id']
          },
        ]
      }
      mediatorsForAppointment: {
        Row: {
          appointmentId: string
          createdAt: string
          mediatorId: string
          updatedAt: string
          uuid: string
        }
        Insert: {
          appointmentId: string
          createdAt?: string
          mediatorId: string
          updatedAt?: string
          uuid?: string
        }
        Update: {
          appointmentId?: string
          createdAt?: string
          mediatorId?: string
          updatedAt?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: 'mediatorsForAppointment_appointmentId_fkey'
            columns: ['appointmentId']
            isOneToOne: false
            referencedRelation: 'appointments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'mediatorsForAppointment_mediatorId_fkey'
            columns: ['mediatorId']
            isOneToOne: false
            referencedRelation: 'mediators'
            referencedColumns: ['id']
          },
        ]
      }
      mediatorsForObjective: {
        Row: {
          createdAt: string
          id: string
          mediatorId: string
          objectiveId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          mediatorId: string
          objectiveId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          mediatorId?: string
          objectiveId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'mediatorsForObjective_mediatorId_fkey'
            columns: ['mediatorId']
            isOneToOne: false
            referencedRelation: 'mediators'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'mediatorsForObjective_objectiveId_fkey'
            columns: ['objectiveId']
            isOneToOne: false
            referencedRelation: 'objectives'
            referencedColumns: ['id']
          },
        ]
      }
      objectives: {
        Row: {
          color: string
          createdAt: string
          id: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt: string
        }
        Insert: {
          color: string
          createdAt?: string
          id?: string
          name: string
          practitionnerId: string
          slug: string
          updatedAt?: string
        }
        Update: {
          color?: string
          createdAt?: string
          id?: string
          name?: string
          practitionnerId?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'objectives_practitionnerId_fkey'
            columns: ['practitionnerId']
            isOneToOne: false
            referencedRelation: 'practitionners'
            referencedColumns: ['id']
          },
        ]
      }
      objectivesForPatient: {
        Row: {
          createdAt: string
          id: string
          objectiveId: string
          patientId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          objectiveId: string
          patientId: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          objectiveId?: string
          patientId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'objectivesForPatient_objectiveId_fkey'
            columns: ['objectiveId']
            isOneToOne: false
            referencedRelation: 'objectives'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'objectivesForPatient_patientId_fkey'
            columns: ['patientId']
            isOneToOne: false
            referencedRelation: 'patients'
            referencedColumns: ['id']
          },
        ]
      }
      patients: {
        Row: {
          birthdate: string
          createdAt: string
          firstname: string
          id: string
          lastname: string
          practitionnerId: string
          slug: string
          updatedAt: string
        }
        Insert: {
          birthdate: string
          createdAt?: string
          firstname: string
          id?: string
          lastname: string
          practitionnerId: string
          slug: string
          updatedAt?: string
        }
        Update: {
          birthdate?: string
          createdAt?: string
          firstname?: string
          id?: string
          lastname?: string
          practitionnerId?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'patients_practitionnerId_fkey'
            columns: ['practitionnerId']
            isOneToOne: false
            referencedRelation: 'practitionners'
            referencedColumns: ['id']
          },
        ]
      }
      payments: {
        Row: {
          appointmentId: string
          createdAt: string
          id: string
          status: string
          type: string | null
          updatedAt: string
        }
        Insert: {
          appointmentId: string
          createdAt?: string
          id?: string
          status?: string
          type?: string | null
          updatedAt?: string
        }
        Update: {
          appointmentId?: string
          createdAt?: string
          id?: string
          status?: string
          type?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'payments_appointmentId_fkey'
            columns: ['appointmentId']
            isOneToOne: false
            referencedRelation: 'appointments'
            referencedColumns: ['id']
          },
        ]
      }
      practitionners: {
        Row: {
          createdAt: string
          email: string
          firstname: string
          gender: string
          id: string
          job: string
          lastname: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          email: string
          firstname?: string
          gender?: string
          id: string
          job?: string
          lastname?: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          email?: string
          firstname?: string
          gender?: string
          id?: string
          job?: string
          lastname?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'practitionners_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
      tests: {
        Row: {
          createdAt: string
          id: string
          name: string
          slug: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          id?: string
          name: string
          slug: string
          updatedAt?: string
        }
        Update: {
          createdAt?: string
          id?: string
          name?: string
          slug?: string
          updatedAt?: string
        }
        Relationships: []
      }
      testsForAppointment: {
        Row: {
          appointmentId: string
          createdAt: string
          id: string
          testId: string
          updatedAt: string
        }
        Insert: {
          appointmentId: string
          createdAt?: string
          id?: string
          testId: string
          updatedAt?: string
        }
        Update: {
          appointmentId?: string
          createdAt?: string
          id?: string
          testId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: 'testsForAppointment_appointmentId_fkey'
            columns: ['appointmentId']
            isOneToOne: false
            referencedRelation: 'appointments'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'testsForAppointment_testId_fkey'
            columns: ['testId']
            isOneToOne: false
            referencedRelation: 'tests'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database['public']['Tables'] & Database['public']['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database['public']['Tables'] &
        Database['public']['Views'])
    ? (Database['public']['Tables'] &
        Database['public']['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof Database['public']['Tables'] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database['public']['Tables']
    ? Database['public']['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof Database['public']['Enums'] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof Database['public']['Enums']
    ? Database['public']['Enums'][PublicEnumNameOrOptions]
    : never
