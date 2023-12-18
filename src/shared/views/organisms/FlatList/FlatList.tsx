import { ReactNode, memo, useCallback, useMemo } from 'react'
import {
  ActivityIndicator,
  ListRenderItemInfo,
  FlatList as RNFlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native'
import { FlatList as RNGHFlatList } from 'react-native-gesture-handler'

import { Box } from '$atoms'
import { ErrorState } from '$organisms/ErrorState'
import { colors } from '$theme'

import { IFlatListProps } from './FlatList.props'

export const FlatList: <T>(props: IFlatListProps<T>) => ReactNode = memo(
  ({
    component = 'default',
    data,
    loadingData = [],
    isLoading: _isLoading = false,
    isRefetching = false,
    isLoadingMore = false,
    horizontal = false,
    refetch,
    renderItem: _renderItem,
    renderHeader = () => null,
    renderFooter = () =>
      isLoadingMore ? () => <ActivityIndicator /> : <Box className={horizontal ? 'w-l' : 'h-m'} />,
    renderSeparator = () => <Box className={horizontal ? 'w-s' : 'h-s'} />,
    error,
    errorClassName,
    renderEmpty = () => <ErrorState type="empty" className={errorClassName} />,
    renderError = () => <ErrorState className={errorClassName} />,
    contentContainerStyle,
    ...props
  }) => {
    const ListComponent = useMemo(
      () => (component === 'default' ? RNFlatList : RNGHFlatList),
      [component]
    )
    const isLoading = !data && _isLoading
    const renderItem = useCallback(
      (info: ListRenderItemInfo<any>) => _renderItem({ ...info, isLoading }),
      [_renderItem, isLoading]
    )

    if (!data && error) return renderError()
    return (
      <ListComponent
        data={data ?? loadingData}
        style={{ backgroundColor: colors.white.classic }}
        horizontal={horizontal}
        renderItem={renderItem}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={<>{renderFooter()}</>}
        ListHeaderComponent={<>{renderHeader()}</>}
        ListEmptyComponent={<>{renderEmpty()}</>}
        {...props}
      />
    )
  }
)

const styles = StyleSheet.create({
  contentContainer: { flexGrow: 1 },
})
