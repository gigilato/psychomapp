import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { forwardRef } from 'react'
import { ActivityIndicator } from 'react-native'

import { Box, Center, Text } from '$atoms'
import { ObjectiveList } from '$features/objective/views/ObjectiveList'
import { PressableText } from '$molecules'
import { BottomSheet } from '$organisms'
import { i18n } from '$shared/infra/i18n/i18n'

import { useObjectiveBottomSheet } from './ObjectiveBottomSheet.lib'
import { IObjectiveBottomSheetProps } from './ObjectiveBottomSheet.props'

export const ObjectiveBottomSheet = forwardRef<BottomSheetModal, IObjectiveBottomSheetProps>(
  (props, ref) => {
    const { innerRef, onPressCreate, isPending, onPressObjective } = useObjectiveBottomSheet(ref)
    return (
      <BottomSheet ref={innerRef} {...props}>
        <Box className="px-l py-m">
          <Text variant="subtitle" className="text-center">
            {i18n.t('objectives.title')}
          </Text>
          <ObjectiveList className="my-l" onPressObjective={onPressObjective} />
          <Center>
            {!isPending ? (
              <PressableText ID="objectives/create" variant="link" onPress={onPressCreate}>
                {i18n.t('objectives.create')}
              </PressableText>
            ) : (
              <ActivityIndicator />
            )}
          </Center>
        </Box>
      </BottomSheet>
    )
  }
)
