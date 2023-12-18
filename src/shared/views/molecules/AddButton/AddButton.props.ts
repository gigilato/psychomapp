import { IPressableIconProps } from '$molecules/Button'

export interface IAddButtonProps extends Omit<IPressableIconProps, 'icon'> {
  handleTabBar?: boolean
}
