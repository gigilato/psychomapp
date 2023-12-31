import clsx from 'clsx'
import React from 'react'

import { HStack, Pressable, Text } from '$atoms'

import { ITagContainerProps, ITagProps } from './Tag.props'

export const TagContainer = ({ gap, className, style, ...props }: ITagContainerProps) => {
  return (
    <HStack
      className={clsx('flex-wrap', className)}
      style={[{ marginTop: -gap, marginLeft: -gap }, style]}
      {...props}
    >
      {React.Children.map(props.children, (child) => {
        if (!child) return null
        return React.cloneElement<ITagProps>(
          child as React.ReactElement,
          { gapStyle: { marginTop: gap, marginLeft: gap } },
          null
        )
      })}
    </HStack>
  )
}

export const Tag = ({
  tag,
  backgroundColor,
  className,
  onPress,
  gapStyle,
  style,
  ...props
}: ITagProps) => {
  return (
    <Pressable
      ID={`tag/${tag}`}
      className={clsx('rounded-full p-xxs flex-row self-start', className)}
      style={[{ backgroundColor }, gapStyle, style]}
      disabled={!onPress}
      onPress={onPress}
      {...props}
    >
      <Text variant="smallBody" className="text-white-classic">
        {tag}
      </Text>
    </Pressable>
  )
}
