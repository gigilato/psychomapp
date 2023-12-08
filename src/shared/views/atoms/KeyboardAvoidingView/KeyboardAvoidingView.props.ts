import { NativeScrollEvent, ScrollViewProps, StyleProp, ViewStyle } from 'react-native'
import { AnimateProps } from 'react-native-reanimated'

export interface IKeyboardAvoidingViewProps
  extends Omit<AnimateProps<ScrollViewProps>, 'style' | 'contentContainerStyle' | 'onScroll'> {
  variant?: 'screen' | 'default'
  style?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  onScroll?: (event: NativeScrollEvent) => void
}
