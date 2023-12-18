import { render } from '@testing-library/react-native'
import { Skeleton } from 'moti/skeleton'

import { Center, Text } from '$atoms'
import { ListRenderItemInfo } from '$organisms/FlatList/FlatList.props'

import { FlatList } from './FlatList'

const data = Array.from({ length: 10 }, (_, i) => i.toString())
const renderItem = ({ item, isLoading }: ListRenderItemInfo<string>) => (
  <Skeleton.Group show={isLoading}>
    <Center className="h-50">
      <Skeleton>
        <Text>{item}</Text>
      </Skeleton>
    </Center>
  </Skeleton.Group>
)

describe('FlatList', () => {
  it('renders correctly', async () => {
    const component = render(<FlatList data={data} renderItem={renderItem} />)
    expect(component).toMatchSnapshot()
  })

  it('renders with Header', async () => {
    const renderHeader = () => <Text>Header</Text>
    const component = render(
      <FlatList data={data} renderItem={renderItem} renderHeader={renderHeader} />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with Footer', async () => {
    const renderFooter = () => <Text>Footer</Text>
    const component = render(
      <FlatList data={data} renderItem={renderItem} renderFooter={renderFooter} />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with loading', async () => {
    const loadingData = Array.from({ length: 3 }, (_, i) => i.toString())
    const component = render(
      <FlatList data={data} renderItem={renderItem} loadingData={loadingData} />
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with error', async () => {
    const renderError = () => <Text>error</Text>
    const component = render(
      <FlatList data={data} renderItem={renderItem} renderError={renderError} />
    )
    expect(component).toMatchSnapshot()
  })
})
