import { router } from 'expo-router'

import { setTabBarVisibility } from '$infra/layout'
import { PressableIcon } from '$molecules'
import { IHeaderLeftProps } from '$navigation/HeaderLeft/HeaderLeft.props'

export const HeaderLeft = ({
  canGoBack,
  onPress,
  restoreTabBar = false,
  type = 'back',
  ...props
}: IHeaderLeftProps) => {
  if (!canGoBack) return null
  return (
    <PressableIcon
      ID="goback"
      icon={type === 'back' ? 'chevron-left' : 'x'}
      iconSize={30}
      onPress={() => {
        onPress?.()
        if (restoreTabBar) setTabBarVisibility(true)
        router.back()
      }}
    />
  )
}
