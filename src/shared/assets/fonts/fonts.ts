import {
  SpaceGrotesk_300Light,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk'
import { loadAsync } from 'expo-font'

export const fonts = {
  'SpaceGrotesk-Light': SpaceGrotesk_300Light,
  'SpaceGrotesk-Regular': SpaceGrotesk_400Regular,
  'SpaceGrotesk-Medium': SpaceGrotesk_500Medium,
  'SpaceGrotesk-SemiBold': SpaceGrotesk_600SemiBold,
  'SpaceGrotesk-Bold': SpaceGrotesk_700Bold,
}

export const loadFontsAsync = () => loadAsync(fonts)
