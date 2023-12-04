import { Image as ExpoImage } from 'expo-image'
import { styled } from 'nativewind'
import { memo } from 'react'

import { getImageSource, useRatioImage } from './Image.lib'
import { IImageProps } from './Image.props'

const StyledImage = styled(ExpoImage)
const DefaultImage = ({ source, ...props }: IImageProps) => {
  return <StyledImage source={getImageSource(source)} {...props} />
}

const RatioImage = memo<IImageProps>(({ source, width, height, style, ...props }) => {
  const ratioStyle = useRatioImage(source, width, height)
  return <Image source={source} style={[ratioStyle, style]} contentFit="contain" {...props} />
})

export const Image = ({ width, height, ...props }: IImageProps) => {
  if (width && height) return <RatioImage width={width} height={height} {...props} />

  return <DefaultImage {...props} />
}
