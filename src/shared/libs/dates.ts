import { areIntervalsOverlapping as _areIntervalsOverlapping } from 'date-fns/areIntervalsOverlapping'
import { differenceInCalendarDays as _differenceInCalendarDays } from 'date-fns/differenceInCalendarDays'
import { differenceInSeconds as _differenceInSeconds } from 'date-fns/differenceInSeconds'
import { differenceInYears as _differenceInYears } from 'date-fns/differenceInYears'
import { eachDayOfInterval as _eachDayOfInterval } from 'date-fns/eachDayOfInterval'
import { endOfDay as _endOfDay } from 'date-fns/endOfDay'
import { endOfMonth as _endOfMonth } from 'date-fns/endOfMonth'
import { endOfWeek as _endOfWeek } from 'date-fns/endOfWeek'
import { format as _format } from 'date-fns/format'
import { isAfter as _isAfter } from 'date-fns/isAfter'
import { isBefore as _isBefore } from 'date-fns/isBefore'
import { isValid as _isValid } from 'date-fns/isValid'
import { fr } from 'date-fns/locale'
import { parseISO as _parseISO } from 'date-fns/parseISO'
import { startOfDay as _startOfDay } from 'date-fns/startOfDay'
import { startOfMonth as _startOfMonth } from 'date-fns/startOfMonth'
import { startOfWeek as _startOfWeek } from 'date-fns/startOfWeek'

type DateOrString = Date | string
type Interval = { start: DateOrString; end: DateOrString }

export const isValid = (date: unknown) => _isValid(date)

export const parseISO = (date: DateOrString) => (typeof date === 'string' ? _parseISO(date) : date)

export const dateFormat = 'dd/MM/yyyy'
export const dayOfWeekFormat = 'EEEEEE.'
export const monthFormat = 'MMMM'

export const format = (date: DateOrString, formatString: string) =>
  _format(parseISO(date), formatString, { locale: fr })

export const differenceInCalendarDays = (dateLeft: DateOrString, dateRight: DateOrString) =>
  _differenceInCalendarDays(parseISO(dateLeft), parseISO(dateRight))

export const differenceInSeconds = (dateLeft: DateOrString, dateRight: DateOrString) =>
  _differenceInSeconds(parseISO(dateLeft), parseISO(dateRight))

export const differenceInYears = (dateLeft: DateOrString, dateRight: DateOrString) =>
  _differenceInYears(parseISO(dateLeft), parseISO(dateRight))

export const getAge = (date: DateOrString) => differenceInYears(new Date(), date)

export const isAfter = (dateLeft: DateOrString, dateRight: DateOrString) =>
  _isAfter(parseISO(dateLeft), parseISO(dateRight))

export const isBefore = (dateLeft: DateOrString, dateRight: DateOrString) =>
  _isBefore(parseISO(dateLeft), parseISO(dateRight))

const WEEK_OPTIONS = { weekStartsOn: 1 } as const
export const startOfWeek = (date: DateOrString) => _startOfWeek(parseISO(date), WEEK_OPTIONS)
export const endOfWeek = (date: DateOrString) => _endOfWeek(parseISO(date), WEEK_OPTIONS)
export const startOfDay = (date: DateOrString) => _startOfDay(parseISO(date))
export const endOfDay = (date: DateOrString) => _endOfDay(parseISO(date))
export const startOfMonth = (date: DateOrString) => _startOfMonth(parseISO(date))
export const endOfMonth = (date: DateOrString) => _endOfMonth(parseISO(date))

export const eachDayOfInterval = (interval: Interval) =>
  _eachDayOfInterval({ start: parseISO(interval.start), end: parseISO(interval.end) })
export const areIntervalsOverlapping = (interval1: Interval, interval2: Interval) =>
  _areIntervalsOverlapping(
    { start: parseISO(interval1.start), end: parseISO(interval1.end) },
    { start: parseISO(interval2.start), end: parseISO(interval2.end) }
  )
