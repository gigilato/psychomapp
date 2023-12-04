import { Asset } from 'expo-asset'

export const images = {
  logo: require('./logo.png'),
}

export const loadImagesAsync = () => Asset.loadAsync(Object.values(images))
