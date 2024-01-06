import { ActivityIndicator } from 'react-native'

import { Box } from '$atoms'
import { useObjectives } from '$features/objective/infra/controllers/useObjectives'
import { Tag, TagContainer } from '$molecules'
import { ErrorState } from '$organisms'

import { IObjectiveListProps } from './ObjectiveList.props'

export const ObjectiveList = ({ className, onPressObjective, ...props }: IObjectiveListProps) => {
  const { data, isLoading: _isLoading, error } = useObjectives()
  const isLoading = !data && _isLoading

  if (isLoading)
    return (
      <Box className={className} {...props}>
        <ActivityIndicator />
      </Box>
    )
  if (!data && error)
    return (
      <Box className={className} {...props}>
        <ErrorState width={100} />
      </Box>
    )
  if (data?.length === 0)
    return (
      <Box className={className} {...props}>
        <ErrorState type="empty" width={100} />
      </Box>
    )

  return (
    <Box className={className} {...props}>
      <TagContainer gap={8}>
        {data?.map((objective) => (
          <Tag
            key={objective.id}
            tag={objective.name}
            backgroundColor={objective.color}
            onPress={onPressObjective ? () => onPressObjective(objective) : undefined}
          />
        ))}
      </TagContainer>
    </Box>
  )
}
