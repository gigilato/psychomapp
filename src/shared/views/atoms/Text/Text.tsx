/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import clsx from 'clsx'
import { styled } from 'nativewind'
import React, { Component } from 'react'
import { Text as TextDefault } from 'react-native'
import Animated from 'react-native-reanimated'

import { getContent, textVariants } from './Text.lib'
import { ITextProps } from './Text.props'

const StyledText = styled(TextDefault)

export const Text = ({
  variant = 'body',
  className,
  textTransform,
  children,
  reversed,
  ...props
}: ITextProps) => {
  return (
    <StyledText
      className={clsx(textVariants[variant], reversed && 'text-white-light', className)}
      {...props}
    >
      {getContent(children, textTransform)}
    </StyledText>
  )
}

class TextComponent extends Component<ITextProps> {
  render() {
    return <Text {...this.props} />
  }
}
export const AnimatedText = Animated.createAnimatedComponent<ITextProps>(TextComponent)
