import { Skeleton } from 'moti/skeleton'

import { Box, HStack, Text } from '$atoms'
import { useObjectives } from '$features/objective/infra/controllers/useObjectives'
import { i18n } from '$infra/i18n'
import { Tag, TagContainer } from '$molecules'
import { ErrorState } from '$organisms'

import { IObjectiveListProps, IObjectiveListContainerProps } from './ObjectiveList.props'

export const ObjectiveListContainer = ({
  className,
  onPressObjective,
  data,
  isLoading: _isLoading,
  error,
  renderEmpty = () => <Text variant="smallBody">{i18n.t('objectives.empty')}</Text>,
  renderError = () => <Text variant="smallBody">{i18n.t('errors.default')}</Text>,
  ...props
}: IObjectiveListContainerProps) => {
  const isLoading = !data && _isLoading

  if (isLoading)
    return (
      <Skeleton.Group show={isLoading}>
        <HStack className={className} {...props}>
          <Skeleton colorMode="light">
            <Box className="h-s w-[30]" />
          </Skeleton>
          <Box className="w-xxs" />
          <Skeleton colorMode="light">
            <Box className="h-s w-[50]" />
          </Skeleton>
          <Box className="w-xxs" />
          <Skeleton colorMode="light">
            <Box className="h-s w-[40]" />
          </Skeleton>
        </HStack>
      </Skeleton.Group>
    )
  if (!data && error)
    return (
      <Box className={className} {...props}>
        {renderError()}
      </Box>
    )
  if (data?.length === 0)
    return (
      <Box className={className} {...props}>
        {renderEmpty()}
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
export const ObjectiveList = (props: IObjectiveListProps) => {
  const { data, isLoading, error } = useObjectives()
  return (
    <ObjectiveListContainer
      data={data}
      isLoading={isLoading}
      error={error}
      renderError={() => <ErrorState width={100} />}
      renderEmpty={() => <ErrorState type="empty" width={100} />}
      {...props}
    />
  )
}
