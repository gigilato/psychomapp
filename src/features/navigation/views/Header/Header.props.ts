import { ReactNode } from 'react'

import { IBoxProps } from '$atoms'

export interface IHeaderProps extends IBoxProps {
  height?: number
  children?: ReactNode
}
