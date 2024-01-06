import { mockObjectiveList } from '$features/objective/infra/mocks/mockObjectives'
import { PatientWithObjectives } from '$types/database'

export const mockPatientList: PatientWithObjectives[] = [
  {
    birthdate: '2021-01-01',
    id: '1',
    firstname: 'John',
    lastname: 'Doe',
    createdAt: '',
    updatedAt: '',
    practitionnerId: '',
    objectives: mockObjectiveList.slice(0, 2),
  },
  {
    birthdate: '2021-01-01',
    id: '2',
    firstname: 'John',
    lastname: 'Doe',
    createdAt: '',
    updatedAt: '',
    practitionnerId: '',
    objectives: mockObjectiveList.slice(0, 1),
  },
  {
    birthdate: '2021-01-01',
    id: '3',
    firstname: 'John',
    lastname: 'Doe',
    createdAt: '',
    updatedAt: '',
    practitionnerId: '',
    objectives: [],
  },
  {
    birthdate: '2021-01-01',
    id: '4',
    firstname: 'John',
    lastname: 'Doe',
    createdAt: '',
    updatedAt: '',
    practitionnerId: '',
    objectives: mockObjectiveList.slice(1, 2),
  },
]
