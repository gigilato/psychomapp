import { IPressableIconProps } from '$molecules/Button'

export interface IActionButtonProps extends Omit<IPressableIconProps, 'icon'> {
  handleTabBar?: boolean
  action?: 'add' | 'edit'
}
