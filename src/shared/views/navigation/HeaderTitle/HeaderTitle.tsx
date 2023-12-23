import { Text } from '$atoms'
import { IHeaderTitleProps } from '$navigation/HeaderTitle/HeaderTitle.props'

export const HeaderTitle = ({ children }: IHeaderTitleProps) => {
  return (
    <Text variant="navigation" textTransform="upper-first">
      {children}
    </Text>
  )
}
