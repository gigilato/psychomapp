import { render } from '@testing-library/react-native'

import { TextInput } from './TextInput'

describe('TextInput', () => {
  it('renders correctly', async () => {
    const component = render(<TextInput ID="test" />)
    expect(component).toMatchSnapshot()
  })
  it('renders correctly with value', async () => {
    const component = render(<TextInput ID="test" value="test" />)
    expect(component).toMatchSnapshot()
  })

  it('renders error correctly', async () => {
    const component = render(<TextInput ID="test" error="error" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon right correctly', async () => {
    const component = render(<TextInput ID="test" iconRight="bell" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon left correctly', async () => {
    const component = render(<TextInput ID="test" iconLeft="bell" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon right error correctly', async () => {
    const component = render(<TextInput ID="test" iconRight="bell" error="error" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon left error correctly', async () => {
    const component = render(<TextInput ID="test" iconLeft="bell" error="error" />)
    expect(component).toMatchSnapshot()
  })
})
