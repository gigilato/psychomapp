import { eachDayOfInterval, endOfWeek, startOfWeek } from '$libs/dates'
import { colors, height as _height } from '$theme'

export const date = new Date()
const from = startOfWeek(date)
const to = endOfWeek(date)

export const interval = eachDayOfInterval({ start: from, end: to })
export const textColor = 'text-white-classic'

export const height = _height.calendar
export const gradient = [colors.secondary.classic, colors.secondary.pale]
