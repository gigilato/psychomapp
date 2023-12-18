import { GestureResponderEvent } from 'react-native'

import { useLayoutStore } from '$infra/layout'
import { impactAsync } from '$libs/haptics'
import { IAddButtonProps } from '$molecules/AddButton/AddButton.props'
import { PressableIcon } from '$molecules/Button'
import { spacing } from '$theme'

export const AddButton = ({ onPress: _onPress, handleTabBar, ...props }: IAddButtonProps) => {
  const tabBarHeight = useLayoutStore((state) => state.tabBarHeight)
  const onPress = (event: GestureResponderEvent) => {
    impactAsync()
    _onPress?.(event)
  }

  return (
    <PressableIcon
      animation="scale"
      shadow
      icon="plus"
      iconSize={24}
      iconClassName="text-white-classic"
      className="absolute right-l rounded-full bg-primary-classic p-m"
      style={{ bottom: handleTabBar ? tabBarHeight + spacing.l : spacing.xl }}
      onPress={onPress}
      {...props}
    />
  )
}
