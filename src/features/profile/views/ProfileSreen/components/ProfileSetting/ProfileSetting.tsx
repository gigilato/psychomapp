import clsx from 'clsx'

import { Box, Pressable, Icon, Text } from '$atoms'
import { tagColors } from '$theme'

import { IProfileSettingProps } from './ProfileSettings.props'

export const ProfileSetting = ({
  content,
  type = 'info',
  color = 'black',
  icon,
  className,
  ...props
}: IProfileSettingProps) => {
  return (
    <Pressable
      animation={type === 'info' ? 'none' : 'opacity'}
      className={clsx('flex-row items-center py-xs', className)}
      {...props}
    >
      {icon ? (
        <Box
          className={clsx('bg-primary-light p-xxs mr-s rounded-s')}
          style={{ backgroundColor: tagColors[color].light }}
        >
          <Icon
            name={icon}
            className={clsx('text-primary-strong')}
            style={{ color: tagColors[color].strong }}
            size={20}
          />
        </Box>
      ) : null}
      <Text variant="body" className="flex-1">
        {content}
      </Text>
      {type === 'info' ? null : (
        <Icon name={type === 'link' ? 'share' : 'chevron-right'} size={type === 'link' ? 20 : 35} />
      )}
    </Pressable>
  )
}
