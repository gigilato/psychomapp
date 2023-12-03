export type Maybe<T> = T | undefined
export type Nullable<T> = T | null
export type Promisable<T> = T | Promise<T>
// eslint-disable-next-line @typescript-eslint/ban-types
export type LiteralUnion<T> = T | (string & {})
export type Percent = `${number}%`

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never

export type Leaves<T> = T extends object ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T] : ''
