import { IBoxProps } from '$atoms'

export interface IPatientFormProps extends IBoxProps {
  patientId?: string
  onSubmit: () => void
}
