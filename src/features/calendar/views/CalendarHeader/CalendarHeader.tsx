import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia'
import clsx from 'clsx'
import { StyleSheet, useWindowDimensions } from 'react-native'

import { Box, Center, HStack, Text, Pressable } from '$atoms'
import { dayOfWeekFormat, format, monthFormat } from '$libs/dates'
import { PressableIcon } from '$molecules'
import { useSafeAreaInsets } from '$views/libs/safeAreaInsets'

import { interval, textColor, date, gradient, height } from './CalendarHeader.lib'

export const CalendarHeader = () => {
  const { width } = useWindowDimensions()
  const { top } = useSafeAreaInsets()

  return (
    <Box shadow className="rounded-b-[48px] mb-xs" style={{ height }}>
      <Box className="rounded-b-[48px] overflow-hidden" style={{ height }}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={width} height={height}>
            <LinearGradient start={vec(0, 0)} end={vec(width, height)} colors={gradient} />
          </Rect>
        </Canvas>
        <Box className="flex-1 px-l">
          <HStack className="justify-between items-center" style={{ paddingTop: top + 12 }}>
            <Text variant="title" className={textColor} textTransform="upper-first">
              {format(date, monthFormat)}
            </Text>
            <PressableIcon ID="" icon="plus-circle" iconSize={30} iconClassName={textColor} />
          </HStack>
          <HStack className="items-center flex-1">
            {interval.map((item) => {
              const isToday = item.getDate() === date.getDate()
              return (
                <Center key={item.getTime()} className="flex-1">
                  <Text className={textColor}>{format(item, dayOfWeekFormat)}</Text>
                  <Pressable
                    ID=""
                    className={clsx(
                      'w-[40] h-[40] rounded-full mt-s items-center justify-center',
                      isToday ? 'bg-white-classic' : ''
                    )}
                  >
                    <Text
                      variant="blackBody"
                      className={clsx(textColor, isToday ? 'text-primary-strong' : '')}
                    >
                      {item.getDate()}
                    </Text>
                  </Pressable>
                </Center>
              )
            })}
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}
