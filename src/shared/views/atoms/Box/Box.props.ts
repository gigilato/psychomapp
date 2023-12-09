import { ViewProps } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

export interface IBoxProps extends ViewProps {
  shadow?: boolean
  absoluteFill?: boolean
}
export type IAnimatedBoxProps = AnimateProps<IBoxProps>
