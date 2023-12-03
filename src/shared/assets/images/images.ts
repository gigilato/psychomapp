import { Asset } from 'expo-asset'

export const images = {
  icon: require('./icon.png'),
  splash: require('./splash.png'),
}

export const loadImagesAsync = () => Asset.loadAsync(Object.values(images))
