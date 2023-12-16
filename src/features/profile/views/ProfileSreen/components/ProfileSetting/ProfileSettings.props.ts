import { IPressableProps, IconName } from '$atoms'
import { TagColor } from '$theme'

export interface IProfileSettingProps extends IPressableProps {
  content: string
  onPress?: () => void
  icon?: IconName
  color?: TagColor
  type?: 'navigation' | 'link' | 'info'
}
