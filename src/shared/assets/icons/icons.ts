import { loadAsync } from 'expo-font'

export const icons = {
  IcoMoon: require('./icomoon.ttf'),
}

export const loadIconsAsync = () => loadAsync(icons)
