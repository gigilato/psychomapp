import { IBoxProps } from '$atoms'

export interface IErrorStateProps extends IBoxProps {
  type?: 'error' | 'empty'
  message?: string
  width?: number
  height?: number
}
