import { ImageProps, ImageSource as DefaultImageSource } from 'expo-image'

import { images } from '$assets/images'
import { LiteralUnion } from '$types/common'

export type ImageSource = LiteralUnion<keyof typeof images> | number | DefaultImageSource

export interface IImageProps extends ImageProps {
  source: ImageSource
  width?: number
  height?: number
}
