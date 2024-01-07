import { router } from 'expo-router'

import { PressableIcon } from '$molecules'
import { IHeaderLeftProps } from '$navigation/HeaderLeft/HeaderLeft.props'

export const HeaderLeft = ({ canGoBack, onPress, type = 'back', ...props }: IHeaderLeftProps) => {
  if (!canGoBack) return null
  return (
    <PressableIcon
      ID="goback"
      icon={type === 'back' ? 'chevron-left' : 'x'}
      iconSize={30}
      onPress={() => {
        onPress?.()
        router.back()
      }}
    />
  )
}
