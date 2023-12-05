import { ToastOptions, ToastPosition, toast } from '@backpackapp-io/react-native-toast'

export const showToast = (message: string, opts?: ToastOptions) => {
  toast(message, {
    position: ToastPosition.BOTTOM,
    styles: {
      text: {
        fontFamily: 'SpaceGrotesk-Medium',
      },
    },
    ...opts,
  })
}
