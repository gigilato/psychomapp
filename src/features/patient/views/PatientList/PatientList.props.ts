import { IFlatListProps } from '$organisms'
import { Patient } from '$types/database'

export interface IPatientListProps extends Omit<IFlatListProps<Patient>, 'data' | 'renderItem'> {}
