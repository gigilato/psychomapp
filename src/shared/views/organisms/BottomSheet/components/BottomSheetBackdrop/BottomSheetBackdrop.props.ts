import { IPressableProps } from '$atoms'

export interface BottomSheetBackdropProps extends IPressableProps {
  pressBehavior: 'none' | 'close'
}
