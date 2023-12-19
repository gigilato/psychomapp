import { GestureResponderEvent } from 'react-native'

import { useLayoutStore } from '$infra/layout'
import { impactAsync } from '$libs/haptics'
import { IActionButtonProps } from '$molecules/ActionButton/ActionButton.props'
import { PressableIcon } from '$molecules/Button'
import { spacing } from '$theme'

export const ActionButton = ({
  onPress: _onPress,
  handleTabBar,
  action = 'add',
  ...props
}: IActionButtonProps) => {
  const tabBarHeight = useLayoutStore((state) => state.tabBarHeight)
  const onPress = (event: GestureResponderEvent) => {
    impactAsync()
    _onPress?.(event)
  }

  return (
    <PressableIcon
      animation="scale"
      shadow
      icon={action === 'add' ? 'plus' : 'edit-2'}
      iconSize={24}
      iconClassName="text-white-classic"
      className="absolute right-l rounded-full bg-primary-classic p-m"
      style={{ bottom: handleTabBar ? tabBarHeight + spacing.l : spacing.xl }}
      onPress={onPress}
      {...props}
    />
  )
}
