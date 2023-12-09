import { TextProps } from 'react-native'

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'bank'
  | 'bell'
  | 'big-bullet-point'
  | 'book'
  | 'bullet-point'
  | 'calendar'
  | 'camera'
  | 'chart'
  | 'check-circle'
  | 'checkmark'
  | 'chevron-right'
  | 'chevron-down'
  | 'clock'
  | 'close-circle'
  | 'contract'
  | 'copy'
  | 'cross'
  | 'down'
  | 'envelope'
  | 'eye'
  | 'eye-barred'
  | 'face-id'
  | 'fingerprint'
  | 'folder'
  | 'home'
  | 'home-filled'
  | 'information'
  | 'leaf'
  | 'lightning-bolt'
  | 'lock'
  | 'log-out'
  | 'megaphone'
  | 'minus'
  | 'news'
  | 'news-filled'
  | 'ordered-list'
  | 'pen'
  | 'pencil'
  | 'phone'
  | 'photo'
  | 'plus'
  | 'refresh'
  | 'settings'
  | 'share'
  | 'sliders-horizontal'
  | 'spinner'
  | 'thin-checkmark'
  | 'thin-cross'
  | 'tick'
  | 'trash'
  | 'up'
  | 'upload'
  | 'user'
  | 'user-filled'
  | 'warning'
  | 'icon_immo'
  | 'whatsapp'
  | 'users'

export interface IIconProps extends TextProps {
  size?: number
  name: IconName
}
