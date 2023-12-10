import { Canvas, Skia, Path } from '@shopify/react-native-skia'
import { useWindowDimensions } from 'react-native'

import { Box } from '$atoms'
import { IHeaderProps } from '$features/navigation/views/Header/Header.props'
import { colors } from '$theme'

export const Header = ({ height = 200, children }: IHeaderProps) => {
  const { width } = useWindowDimensions()
  const style = { width, height }

  const path = Skia.Path.Make()
  path.moveTo(0, 0)
  path.lineTo(0, height * 0.75)
  path.cubicTo(width * 0.25, height * 0.9, width / 2, height, width, height * 0.95)
  path.lineTo(width, 0)
  path.close()

  return (
    <Box style={style}>
      <Canvas style={style}>
        <Path path={path} strokeWidth={2} style="fill" color={colors.secondary.classic} />
      </Canvas>
      <Box absoluteFill>{children}</Box>
    </Box>
  )
}
