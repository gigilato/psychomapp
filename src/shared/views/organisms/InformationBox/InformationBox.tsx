import { Skeleton } from 'moti/skeleton'

import { Box, Text } from '$atoms'

import { IInformationBoxProps } from './InformationBox.props'

export const InformationBox = ({ label, value, children, ...props }: IInformationBoxProps) => {
  return (
    <Box {...props}>
      <Text variant="boldBody" className="mb-xxs">
        {label}
      </Text>
      {children ?? (
        <Skeleton colorMode="dark" width="60%">
          <Text variant="body">{value}</Text>
        </Skeleton>
      )}
    </Box>
  )
}
