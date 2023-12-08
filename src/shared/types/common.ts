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

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type DeepKey<T, K extends keyof T = keyof T> = K extends string | number
  ? T[K] extends infer R
    ? `${K}` | (R extends Record<string, unknown> ? `${K}.${DeepKey<R>}` : never)
    : never
  : never

export type DeepValue<T, P extends DeepKey<T>> = P extends `${infer K}.${infer Rest}`
  ? T[(K extends `${infer R extends number}` ? R : K) & keyof T] extends infer S
    ? S extends never
      ? never
      : Rest extends DeepKey<S>
        ? DeepValue<S, Rest>
        : never
    : never
  : T[(P extends `${infer R extends number}` ? R : P) & keyof T]
