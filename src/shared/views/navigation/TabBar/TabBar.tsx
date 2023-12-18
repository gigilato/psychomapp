import { useLayout } from '@react-native-community/hooks'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useEffect } from 'react'
import { useAnimatedStyle } from 'react-native-reanimated'

import { AnimatedHStack } from '$atoms'
import { i18n } from '$infra/i18n'
import { setTabBarHeight, useLayoutStore } from '$infra/layout'
import { useTransition, mix } from '$views/libs/animations'
import { useSafeAreaInsets } from '$views/libs/safeAreaInsets'

import { TabBarIcon } from './components'

export const TabBar = ({ state: { index } }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()
  const isTabBarVisible = useLayoutStore((state) => state.isTabBarVisible)
  const transition = useTransition(isTabBarVisible)

  const aStyle = useAnimatedStyle(() => {
    return { bottom: mix(transition, [-200, bottom]), opacity: mix(transition, [0, 1]) }
  })

  const { onLayout, height } = useLayout()
  useEffect(() => {
    setTabBarHeight(height + bottom)
  }, [height, bottom])

  return (
    <AnimatedHStack
      shadow
      className="absolute self-center py-s px-xs rounded-xl justify-around"
      style={aStyle}
      onLayout={onLayout}
    >
      <TabBarIcon
        route="/dashboard/"
        icon="calendar"
        isSelected={index === 0}
        name={i18n.t('navigation.calendar')}
      />
      <TabBarIcon
        route="/dashboard/patients/"
        icon="users"
        isSelected={index === 2}
        name={i18n.t('navigation.patients')}
      />
      <TabBarIcon
        route="/dashboard/profile/"
        icon="settings"
        isSelected={index === 1}
        name={i18n.t('navigation.settings')}
      />
    </AnimatedHStack>
  )
}
