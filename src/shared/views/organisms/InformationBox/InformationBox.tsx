import { Skeleton } from 'moti/skeleton'

import { Box, Text } from '$atoms'

import { IInformationBoxProps } from './InformationBox.props'

export const InformationBox = ({ label, value, ...props }: IInformationBoxProps) => {
  return (
    <Box {...props}>
      <Text variant="boldBody">{label}</Text>
      <Skeleton colorMode="light" width="60%">
        <Text variant="body">{value}</Text>
      </Skeleton>
    </Box>
  )
}
