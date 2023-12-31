import clsx from 'clsx'

import { Center, Image, Text } from '$atoms'
import { i18n } from '$infra/i18n'
import { IErrorStateProps } from '$organisms/ErrorState/ErrorState.props'

export const ErrorState = ({
  type = 'error',
  message,
  className,
  width,
  height,
  ...props
}: IErrorStateProps) => {
  return (
    <Center className={clsx('self-center', className)} {...props}>
      <Image source={type} width={width ?? 200} height={height} />
      <Text className="mt-l">
        {message ?? i18n.t(type === 'empty' ? 'errors.empty' : 'errors.default')}
      </Text>
    </Center>
  )
}
