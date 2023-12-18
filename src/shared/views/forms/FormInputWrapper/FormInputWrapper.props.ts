import { IBoxProps } from '$atoms'

export interface IFormInputWrapperProps extends IBoxProps {
  label?: string
  error?: string
  textClassName?: string
}
