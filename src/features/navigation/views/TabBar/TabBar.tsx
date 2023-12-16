import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSegments } from 'expo-router'
import { useAnimatedStyle } from 'react-native-reanimated'

import { AnimatedHStack } from '$atoms'
import { TabBarIcon } from '$features/navigation/views/TabBar/components'
import { i18n } from '$infra/i18n'
import { useTransition, mix } from '$views/libs/animations'
import { useSafeAreaInsets } from '$views/libs/safeAreaInsets'

export const TabBar = ({ state: { index } }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()
  const segments = useSegments() as string[]

  const shouldHide = segments.includes('equipment')
  const transition = useTransition(shouldHide)

  const aStyle = useAnimatedStyle(() => {
    return { bottom: mix(transition, [bottom, -200]), opacity: mix(transition, [1, 0]) }
  })

  return (
    <AnimatedHStack
      shadow
      className="absolute self-center py-s px-xs rounded-xl justify-around"
      style={aStyle}
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
