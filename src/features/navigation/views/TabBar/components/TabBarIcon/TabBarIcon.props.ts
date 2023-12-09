import { IPressableProps, IconName } from '$atoms'

export interface ITabBarIconProps extends Omit<IPressableProps, 'ID'> {
  isSelected: boolean
  icon: IconName
  route: string
  name: string
}
