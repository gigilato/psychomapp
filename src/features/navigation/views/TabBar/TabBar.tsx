import { BottomTabBarProps } from '@react-navigation/bottom-tabs'

import { HStack } from '$atoms'
import { TabBarIcon } from '$features/navigation/views/TabBar/components'
import { i18n } from '$infra/i18n'
import { useSafeAreaInsets } from '$views/libs/safeAreaInsets'

export const TabBar = ({ state: { index } }: BottomTabBarProps) => {
  const { bottom } = useSafeAreaInsets()
  return (
    <HStack
      shadow
      className="absolute self-center py-s px-xs rounded-xl justify-around"
      style={{ bottom }}
    >
      <TabBarIcon
        route="dashboard"
        icon="calendar"
        isSelected={index === 0}
        name={i18n.t('navigation.calendar')}
      />
      <TabBarIcon
        route="dashboard/patients"
        icon="users"
        isSelected={index === 2}
        name={i18n.t('navigation.patients')}
      />
      <TabBarIcon
        route="dashboard/profile"
        icon="sliders-horizontal"
        isSelected={index === 1}
        name={i18n.t('navigation.settings')}
      />
    </HStack>
  )
}
