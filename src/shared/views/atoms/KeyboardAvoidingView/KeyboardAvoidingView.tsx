import { styled } from 'nativewind'
import { ScrollView, useWindowDimensions } from 'react-native'
import { useReanimatedFocusedInput } from 'react-native-keyboard-controller'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedKeyboard,
  withSpring,
  useAnimatedReaction,
  interpolate,
  KeyboardState,
} from 'react-native-reanimated'

import { AnimatedBox } from '$atoms/Box'
import { IKeyboardAvoidingViewProps } from '$atoms/KeyboardAvoidingView/KeyboardAvoidingView.props'
import { colors } from '$theme'

const StyledScrollView = styled(ScrollView)
const AnimatedScrollView = Animated.createAnimatedComponent(StyledScrollView)
const PADDING = 50

export const KeyboardAvoidingView = ({
  variant = 'default',
  style,
  contentContainerStyle,
  onScroll,
  ...props
}: IKeyboardAvoidingViewProps) => {
  const { height: windowsHeight } = useWindowDimensions()
  const { input } = useReanimatedFocusedInput()

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y
    onScroll?.(event)
  })

  const fillStyle = useAnimatedStyle(() => {
    return { height: Math.max(0, -scrollY.value) }
  })

  const translationY = useSharedValue(0)
  const aStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translationY.value }],
    }
  })

  const { height: keyboardHeight, state } = useAnimatedKeyboard()
  const savedKeyboardHeight = useSharedValue(0)
  const savedTranslationY = useSharedValue(0)
  useAnimatedReaction(
    () => keyboardHeight.value,
    (current, _prev) => {
      const prev = _prev === null ? 0 : _prev
      const isOpening = current > prev || (current === 0 && prev === 0)
      if (isOpening) {
        const inputY = input.value?.layout.absoluteY ?? 0
        const offsetY = scrollY.value + windowsHeight - current - PADDING
        translationY.value = -Math.max(0, inputY - offsetY)
        savedKeyboardHeight.value = current
        savedTranslationY.value = translationY.value
      } else {
        translationY.value = interpolate(
          current,
          [0, savedKeyboardHeight.value],
          [0, savedTranslationY.value]
        )
      }
    }
  )

  useAnimatedReaction(
    () => state.value,
    (current) => {
      if (current === KeyboardState.CLOSED) {
        savedKeyboardHeight.value = 0
        savedTranslationY.value = 0
      }
    }
  )

  useAnimatedReaction(
    () => input.value?.layout.absoluteY,
    (current, prev) => {
      if (!current || !prev) return
      const offsetY = scrollY.value + windowsHeight - keyboardHeight.value
      if (current && current > offsetY) {
        translationY.value = withSpring(offsetY - current - PADDING)
      }
    }
  )

  return (
    <>
      <AnimatedScrollView
        style={[aStyle, { backgroundColor: colors.white.classic }, style]}
        contentContainerStyle={[{ flexGrow: 1 }, contentContainerStyle]}
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        scrollEnabled={variant !== 'screen'}
        {...props}
      />
      <AnimatedBox
        style={fillStyle}
        className="bg-secondary-classic absolute top-[0] left-[0] right-[0]"
      />
    </>
  )
}
