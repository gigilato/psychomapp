import clsx from 'clsx'
import { Component } from 'react'
import { View } from 'react-native'
import Animated from 'react-native-reanimated'

import { IBoxProps } from '$views/atoms/Box/Box.props'

export const Box = View
export const AnimatedBox = Animated.createAnimatedComponent(Box)

export const HStack = ({ className, ...props }: IBoxProps) => (
  <View className={clsx('flex-row', className)} {...props} />
)
class HStackComponent extends Component<IBoxProps> {
  render() {
    return <Center {...this.props} />
  }
}
export const AnimatedHStack = Animated.createAnimatedComponent(HStackComponent)

export const Center = ({ className, ...props }: IBoxProps) => (
  <View className={clsx('justify-center items-center', className)} {...props} />
)
class CenterComponent extends Component<IBoxProps> {
  render() {
    return <Center {...this.props} />
  }
}
export const AnimatedCenter = Animated.createAnimatedComponent(CenterComponent)

export const Screen = ({ className, ...props }: IBoxProps) => (
  <View className={clsx('flex-1', className)} {...props} />
)
