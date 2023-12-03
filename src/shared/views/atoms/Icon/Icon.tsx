import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { ComponentType } from 'react'

import glyphMap from '$assets/icons/selection.json'

import { IIconProps } from './Icon.props'

export const Icon = createIconSetFromIcoMoon(
  glyphMap,
  'IcoMoon',
  'icomoon.ttf'
) as ComponentType<IIconProps>
