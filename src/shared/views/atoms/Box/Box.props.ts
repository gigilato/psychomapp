import { ViewProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

import { IShadowProps } from '$views/libs/shadow'

export interface IBoxProps extends ViewProps, IShadowProps {
  absoluteFill?: boolean
}
export type IAnimatedBoxProps = AnimateProps<IBoxProps>

export interface ISeparatorProps extends IBoxProps {
  vertical?: boolean
}
