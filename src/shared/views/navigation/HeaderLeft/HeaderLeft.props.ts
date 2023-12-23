import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

export interface IHeaderLeftProps extends HeaderBackButtonProps {
  type?: 'back' | 'close'
  onPress?: () => void
  restoreTabBar?: boolean
}
