import { useSafeAreaInsets as useSafeAreaInsetsDefault } from 'react-native-safe-area-context'

import { spacing } from '$theme'

const getNonZeroInset = (inset: number) => (inset === 0 ? spacing.m : inset)

type SafeAreaInset =
  | 'currentTop'
  | 'top'
  | 'currentBottom'
  | 'bottom'
  | 'left'
  | 'right'
  | 'hPadding'
  | 'vPadding'

export const useSafeAreaInsets = (): Record<SafeAreaInset, number> => {
  const insets = useSafeAreaInsetsDefault()
  return {
    currentTop: insets.top,
    top: getNonZeroInset(insets.top),
    currentBottom: insets.bottom,
    bottom: getNonZeroInset(insets.bottom),
    left: insets.left,
    right: insets.right,
    hPadding: spacing.l,
    vPadding: spacing.l,
  }
}

type Inset = 'default' | 'safe' | 'real' | 'none' | number
export interface Insets {
  horizontal?: Inset
  vertical?: Inset
  top?: Inset
  bottom?: Inset
  left?: Inset
  right?: Inset
}
const getInsetValue = (
  inset: Inset,
  defaultValue: number,
  safeValue: number,
  realValue: number
) => {
  if (typeof inset === 'number') return inset
  if (inset === 'none') return 0
  if (inset === 'default') return defaultValue
  if (inset === 'safe') return safeValue
  return realValue
}
export const useSafeAreaStyle = ({
  horizontal: hInsets = 'safe',
  vertical: vInsets = 'safe',
  top: tInset,
  bottom: bInset,
  left: lInset,
  right: rInset,
}: Insets) => {
  const { bottom, currentBottom, currentTop, top, hPadding, left, right, vPadding } =
    useSafeAreaInsets()
  return {
    paddingBottom: getInsetValue(bInset ?? vInsets, vPadding, bottom, currentBottom),
    paddingTop: getInsetValue(tInset ?? vInsets, vPadding, top, currentTop),
    paddingLeft: getInsetValue(lInset ?? hInsets, hPadding, hPadding, left),
    paddingRight: getInsetValue(rInset ?? hInsets, hPadding, hPadding, right),
  }
}
