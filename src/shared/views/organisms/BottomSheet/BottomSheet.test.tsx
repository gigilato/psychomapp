import { render } from '@testing-library/react-native'

import { Center, Text } from '$atoms'

import { BottomSheet } from './BottomSheet'

jest.mock('react-native-safe-area-context', () => {
  const actualSafeAreaContext = jest.requireActual('react-native-safe-area-context')
  return {
    ...actualSafeAreaContext,
    useSafeAreaInsets: () => ({
      bottom: 16,
    }),
  }
})

const Content = () => (
  <Center className="h-[40]">
    <Text>Content</Text>
  </Center>
)

describe('BottomSheet', () => {
  it('renders correctly', async () => {
    const component = render(
      <BottomSheet name="DeleteTransfer" modal={false}>
        <Content />
      </BottomSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders without dynamic snap', async () => {
    const component = render(
      <BottomSheet name="DeleteTransfer" modal={false} enableDynamicSnapPoints={false}>
        <Content />
      </BottomSheet>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with multiple snap points', async () => {
    const component = render(
      <BottomSheet
        name="DeleteTransfer"
        modal={false}
        enableDynamicSnapPoints={false}
        snapPoints={['30%', '70%']}
      >
        <Content />
      </BottomSheet>
    )
    expect(component).toMatchSnapshot()
  })
})
