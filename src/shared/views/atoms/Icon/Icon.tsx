import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { styled } from 'nativewind'
import { ComponentType } from 'react'

import glyphMap from '$assets/icons/selection.json'

import { IIconProps } from './Icon.props'

const IconComponent = createIconSetFromIcoMoon(
  glyphMap,
  'IcoMoon',
  'icomoon.ttf'
) as ComponentType<IIconProps>

export const Icon = styled(IconComponent)
