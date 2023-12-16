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
      className={clsx('flex-row items-center py-s', className)}
      {...props}
    >
      {icon ? (
        <Box
          className={clsx('bg-primary-light p-xs mr-s rounded-s')}
          style={{ backgroundColor: tagColors[color].light }}
        >
          <Icon
            name={icon}
            className={clsx('text-primary-strong')}
            style={{ color: tagColors[color].strong }}
            size={15}
          />
        </Box>
      ) : null}
      <Text variant="body" className="flex-1">
        {content}
      </Text>
      {type === 'info' ? null : (
        <Icon name={type === 'link' ? 'log-in' : 'chevron-right'} size={20} />
      )}
    </Pressable>
  )
}
