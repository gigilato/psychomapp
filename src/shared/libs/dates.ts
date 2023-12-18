import { differenceInCalendarDays as _differenceInCalendarDays } from 'date-fns/differenceInCalendarDays'
import { differenceInSeconds as _differenceInSeconds } from 'date-fns/differenceInSeconds'
import { differenceInYears as _differenceInYears } from 'date-fns/differenceInYears'
import { format as _format } from 'date-fns/format'
import { isAfter as _isAfter } from 'date-fns/isAfter'
import { isBefore as _isBefore } from 'date-fns/isBefore'
import { isValid as _isValid } from 'date-fns/isValid'
import { fr } from 'date-fns/locale'
import { parseISO as _parseISO } from 'date-fns/parseISO'

type DateOrString = Date | string

export const isValid = (date: unknown) => _isValid(date)

export const parseISO = (date: DateOrString) => (typeof date === 'string' ? _parseISO(date) : date)

export const dateFormat = 'dd/MM/yyyy'
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
