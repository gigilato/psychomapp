import clsx from 'clsx'
import { styled } from 'nativewind'
import { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated from 'react-native-reanimated'

import { shadowClassName } from '$views/libs/shadow'

import { IBoxProps, ISeparatorProps } from './Box.props'

const StyledView = styled(View)

export const Box = ({ className, style, shadow, absoluteFill, ...props }: IBoxProps) => (
  <StyledView
    style={[absoluteFill && StyleSheet.absoluteFill, style]}
    className={clsx(shadow ? shadowClassName : '', className)}
    {...props}
  />
)
class BoxComponent extends Component<IBoxProps> {
  render() {
    return <Box {...this.props} />
  }
}
export const AnimatedBox = Animated.createAnimatedComponent(BoxComponent)

export const HStack = ({ className, ...props }: IBoxProps) => (
  <Box className={clsx('flex-row', className)} {...props} />
)
class HStackComponent extends Component<IBoxProps> {
  render() {
    return <HStack {...this.props} />
  }
}
export const AnimatedHStack = Animated.createAnimatedComponent(HStackComponent)

export const Center = ({ className, ...props }: IBoxProps) => (
  <Box className={clsx('justify-center items-center', className)} {...props} />
)
class CenterComponent extends Component<IBoxProps> {
  render() {
    return <Center {...this.props} />
  }
}
export const AnimatedCenter = Animated.createAnimatedComponent(CenterComponent)

export const Screen = ({ className, ...props }: IBoxProps) => (
  <Box className={clsx('flex-1 bg-white-classic', className)} {...props} />
)

export const Separator = ({ className, vertical, style, ...props }: ISeparatorProps) => (
  <Box
    className={clsx('bg-grey-light', className)}
    style={[
      vertical ? { width: StyleSheet.hairlineWidth } : { height: StyleSheet.hairlineWidth },
      style,
    ]}
    {...props}
  />
)
