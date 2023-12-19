import * as Haptics from 'expo-haptics'

type ImpactType = 'heavy' | 'medium' | 'light'

const feedback: Record<ImpactType, Haptics.ImpactFeedbackStyle> = {
  heavy: Haptics.ImpactFeedbackStyle.Heavy,
  medium: Haptics.ImpactFeedbackStyle.Medium,
  light: Haptics.ImpactFeedbackStyle.Light,
}
export const impactAsync = (type: ImpactType = 'light') => Haptics.impactAsync(feedback[type])
