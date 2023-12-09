import clsx from 'clsx'
import { router } from 'expo-router'

import { Icon, Pressable, Text } from '$atoms'
import { impactAsync } from '$libs/haptics'

import { ITabBarIconProps } from './TabBarIcon.props'

export const TabBarIcon = ({ route, icon, isSelected, name }: ITabBarIconProps) => {
  const color = isSelected ? 'text-primary-classic' : ''
  return (
    <Pressable
      ID={`TabBarIcon/${name}`}
      className="items-center w-[90]"
      onPress={() => {
        impactAsync()
        router.push(route)
      }}
    >
      <Icon name={icon} size={30} className={clsx(color)} />
      <Text className={clsx(color)}>{name}</Text>
    </Pressable>
  )
}
