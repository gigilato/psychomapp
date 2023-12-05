import { Toast } from '@backpackapp-io/react-native-toast'

export type ToastOptions = Partial<
  Pick<
    Toast,
    | 'id'
    | 'icon'
    | 'duration'
    | 'position'
    | 'styles'
    | 'height'
    | 'width'
    | 'customToast'
    | 'disableShadow'
    | 'providerKey'
  >
>
