import { ReactElement, ReactNode } from 'react'
import { FlatListProps, ListRenderItemInfo as RNListRenderItemInfo } from 'react-native'

export type IKeyExtractor<T> = (item: T, index: number) => string
export type ListRenderItemInfo<T> = RNListRenderItemInfo<T> & { isLoading: boolean }

export interface IFlatListProps<T>
  extends Omit<
    FlatListProps<T>,
    | 'ListHeaderComponent'
    | 'ListFooterComponent'
    | 'ItemSeparatorComponent'
    | 'ListEmptyComponent'
    | 'renderItem'
  > {
  renderItem: (params: ListRenderItemInfo<T> & { isLoading: boolean }) => ReactElement
  loadingData?: T[]
  isLoading?: boolean
  isRefetching?: boolean
  isLoadingMore?: boolean
  hasNextPage?: boolean
  renderHeader?: () => ReactNode
  renderFooter?: () => ReactNode
  renderSeparator?: () => ReactNode
  error?: string
  errorClassName?: string
  renderError?: () => ReactNode
  renderEmpty?: () => ReactNode
  refetch?: () => void
  fetchNextPage?: () => void
  component?: 'default' | 'bottomSheet'
}
