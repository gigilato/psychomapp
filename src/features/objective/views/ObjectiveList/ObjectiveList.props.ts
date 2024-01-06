import { IBoxProps } from '$atoms'
import { Objective } from '$types/database'

export interface IObjectiveListProps extends IBoxProps {
  onPressObjective?: (objective: Objective) => void
}
