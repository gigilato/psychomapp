import { PressableProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

import { IShadowProps } from '$views/libs/shadow'

export type PressableAnimation = 'scale' | 'opacity' | 'none'

type NotAnimatedProps = 'onPress' | 'onPressIn' | 'onPressOut' | 'onLongPress'

export interface IPressableProps
  extends Omit<AnimateProps<PressableProps>, NotAnimatedProps>,
    Pick<PressableProps, NotAnimatedProps>,
    IShadowProps {
  ID: string
  animation?: PressableAnimation
  animationOpacity?: number
  animationScale?: number
  animationDuration?: number
  event?: string
  eventProperties?: Record<string, string | undefined>
  // link?: {
  //   type: 'internal' | 'external' | 'authentified'
  //   url: YomoniURL
  //   params?: Record<string, string>
  //   beforeBrowserOpen?: () => boolean
  //   onBrowserClose?: () => void
  // }
}
