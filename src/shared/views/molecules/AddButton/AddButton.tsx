import { GestureResponderEvent } from 'react-native'

import { impactAsync } from '$libs/haptics'
import { IPressableIconProps, PressableIcon } from '$molecules/Button'

export const AddButton = ({ onPress: _onPress, ...props }: Omit<IPressableIconProps, 'icon'>) => {
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
      className="absolute right-l bottom-xl rounded-full bg-primary-classic p-m"
      onPress={onPress}
      {...props}
    />
  )
}
