import { render } from '@testing-library/react-native'

import { Box, HStack, Center, Screen } from './Box'

const Component = () => (
  <Box className="flex-1 bg-orange justify-center">
    <HStack className="bg-grey-classic">
      <Box className="h-[80] w-[80] bg-success-tint200" />
      <Box className="p-[60] mx-s bg-error" />
      <Box className="h-[20] w-xxl bg-primary-electric" />
    </HStack>
  </Box>
)

describe('Box', () => {
  it('renders correctly', async () => {
    const component = render(<Component />)
    expect(component).toMatchSnapshot()
  })
})

describe('Center', () => {
  it('renders correctly', async () => {
    const component = render(<Center />)
    expect(component).toMatchSnapshot()
  })
})

describe('Screen', () => {
  it('renders correctly', async () => {
    const component = render(<Screen />)
    expect(component).toMatchSnapshot()
  })
})
