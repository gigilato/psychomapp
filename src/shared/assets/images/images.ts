import { Asset } from 'expo-asset'

export const images = {
  logo: require('./logo.png'),
  'autism-table': require('./autism-table.png'),
}

export const loadImagesAsync = () => Asset.loadAsync(Object.values(images))
