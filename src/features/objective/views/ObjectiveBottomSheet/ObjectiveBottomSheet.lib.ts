import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardedRef, useImperativeHandle, useRef } from 'react'
import { Alert } from 'react-native'

import { useCreateObjective } from '$features/objective/infra/controllers/useCreateObjective'
import { useDeleteObjective } from '$features/objective/infra/controllers/useDeleteObjective'
import { useUpdateObjective } from '$features/objective/infra/controllers/useUpdateObjective'
import { i18n } from '$infra/i18n'
import { Objective } from '$types/database'

export const useObjectiveBottomSheet = (ref: ForwardedRef<BottomSheetModal>) => {
  const innerRef = useRef<BottomSheetModal>(null)
  useImperativeHandle(ref, () => (innerRef as any).current)

  const { mutate: createObjective, isPending } = useCreateObjective()
  const { mutate: updateObjective } = useUpdateObjective()
  const { mutate: deleteObjective } = useDeleteObjective()

  const onPressCreate = () => {
    Alert.prompt(i18n.t('objectives.create'), undefined, [
      { style: 'cancel', text: i18n.t('common.cancel') },
      {
        onPress: (name?: string) => {
          if (!name || name === '') return
          createObjective({ name })
        },
      },
    ])
  }

  const onPressObjective = (objective: Objective) => {
    Alert.prompt(
      i18n.t('objectives.update'),
      undefined,
      [
        {
          style: 'destructive',
          text: i18n.t('common.delete'),
          onPress: () => deleteObjective(objective),
        },
        {
          onPress: (name?: string) => {
            if (!name || name === '' || name === objective.name) return
            updateObjective({ current: objective, update: { name } })
          },
          text: i18n.t('common.validate'),
        },
      ],
      undefined,
      objective.name
    )
  }

  return { innerRef, onPressCreate, isPending, onPressObjective }
}
