import {
  LibreFranklin_100Thin,
  LibreFranklin_100Thin_Italic,
  LibreFranklin_200ExtraLight,
  LibreFranklin_200ExtraLight_Italic,
  LibreFranklin_300Light,
  LibreFranklin_300Light_Italic,
  LibreFranklin_400Regular,
  LibreFranklin_400Regular_Italic,
  LibreFranklin_500Medium,
  LibreFranklin_500Medium_Italic,
  LibreFranklin_600SemiBold,
  LibreFranklin_600SemiBold_Italic,
  LibreFranklin_700Bold,
  LibreFranklin_700Bold_Italic,
  LibreFranklin_800ExtraBold,
  LibreFranklin_800ExtraBold_Italic,
  LibreFranklin_900Black,
  LibreFranklin_900Black_Italic,
} from '@expo-google-fonts/libre-franklin'
import { loadAsync } from 'expo-font'

export const fonts = {
  LibreFranklin_100Thin,
  LibreFranklin_100Thin_Italic,
  LibreFranklin_200ExtraLight,
  LibreFranklin_200ExtraLight_Italic,
  LibreFranklin_300Light,
  LibreFranklin_300Light_Italic,
  LibreFranklin_400Regular,
  LibreFranklin_400Regular_Italic,
  LibreFranklin_500Medium,
  LibreFranklin_500Medium_Italic,
  LibreFranklin_600SemiBold,
  LibreFranklin_600SemiBold_Italic,
  LibreFranklin_700Bold,
  LibreFranklin_700Bold_Italic,
  LibreFranklin_800ExtraBold,
  LibreFranklin_800ExtraBold_Italic,
  LibreFranklin_900Black,
  LibreFranklin_900Black_Italic,
}

export const loadFontsAsync = () => loadAsync(fonts)
