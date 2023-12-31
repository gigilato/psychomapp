import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { ForwardedRef, useImperativeHandle, useRef } from 'react'
import { Alert } from 'react-native'

import { useCreateObjective } from '$features/objective/infra/controllers/useCreateObjectives'
import { i18n } from '$infra/i18n'

export const useObjectiveBottomSheet = (ref: ForwardedRef<BottomSheetModal>) => {
  const innerRef = useRef<BottomSheetModal>(null)
  useImperativeHandle(ref, () => (innerRef as any).current)

  const { mutate, isPending } = useCreateObjective()
  const onPress = (name?: string) => {
    if (!name || name === '') return
    mutate({ name })
  }
  const onPressCreate = () => {
    Alert.prompt(i18n.t('objectives.create'), undefined, [
      { style: 'cancel', text: i18n.t('common.cancel') },
      { onPress, text: i18n.t('common.validate') },
    ])
  }
  return { innerRef, onPressCreate, isPending }
}
