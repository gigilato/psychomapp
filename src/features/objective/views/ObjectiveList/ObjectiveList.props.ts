import { ReactElement } from 'react'

import { IBoxProps } from '$atoms'
import { Objective } from '$types/database'

export interface IObjectiveListProps extends IBoxProps {
  onPressObjective?: (objective: Objective) => void
  renderError?: () => ReactElement
  renderEmpty?: () => ReactElement
}

export interface IObjectiveListContainerProps extends IObjectiveListProps {
  data?: Objective[]
  isLoading?: boolean
  error?: Error | null
}
