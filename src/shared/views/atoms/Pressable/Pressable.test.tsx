import { render } from '@testing-library/react-native'
import { View } from 'react-native'

import { Pressable } from './Pressable'

const Box = () => <View style={{ height: 100, width: 100 }} />

describe('Pressable', () => {
  it('renders correctly', async () => {
    const component = render(
      <Pressable ID="test">
        <Box />
      </Pressable>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with scale', async () => {
    const component = render(
      <Pressable ID="test" animation="scale">
        <Box />
      </Pressable>
    )
    expect(component).toMatchSnapshot()
  })

  it('renders with styles', async () => {
    const className = 'p-s bg-primary-electric rounded-s'
    const component = render(
      <Pressable ID="test" className={className}>
        <Box />
      </Pressable>
    )
    expect(component).toMatchSnapshot()
  })
})
