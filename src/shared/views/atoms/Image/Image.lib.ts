import { has, get } from 'lodash'
import { useCallback, useEffect, useState } from 'react'
import { Image as RNImage } from 'react-native'

import { images } from '$assets/images'

import { ImageSource } from './Image.props'

export const getImageSource = (source: ImageSource) => {
  if (typeof source === 'string' && has(images, source)) return get(images, source)
  return source
}

export const useRatioImage = (source: ImageSource, width?: number, height?: number) => {
  if (!width && !height) throw new Error('You must provide at least one of width or height')

  const [ratioStyle, setRatioStyle] = useState({ width, height })
  const generateStyle = useCallback(
    (realWidth: number, realHeight: number) => {
      const isWidth = !!width
      const value = isWidth ? width! : height!
      const ratioValue = isWidth
        ? (value * realHeight) / realWidth
        : (value * realWidth) / realHeight
      setRatioStyle({ width: isWidth ? value : ratioValue, height: isWidth ? ratioValue : value })
    },
    [height, width]
  )

  useEffect(() => {
    const resolvedSource = getImageSource(source)
    if (typeof resolvedSource === 'number') {
      const { width: imageRealWidth, height: imageRealHeight } =
        RNImage.resolveAssetSource(resolvedSource)
      generateStyle(imageRealWidth, imageRealHeight)
    } else if (typeof resolvedSource === 'object') {
      if (resolvedSource.headers)
        RNImage.getSizeWithHeaders(
          resolvedSource.uri,
          resolvedSource.headers,
          (imageRealWidth, imageRealHeight) => generateStyle(imageRealWidth, imageRealHeight)
        )
      else
        RNImage.getSize(resolvedSource.uri, (imageRealWidth, imageRealHeight) =>
          generateStyle(imageRealWidth, imageRealHeight)
        )
    }
  }, [height, width, source, generateStyle])
  return ratioStyle
}
