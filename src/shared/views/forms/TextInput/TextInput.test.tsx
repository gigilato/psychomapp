import { fireEvent, render } from '@testing-library/react-native'

import { EmailInput, PasswordInput, TextInput } from './TextInput'

describe('TextInput', () => {
  it('renders correctly', async () => {
    const component = render(<TextInput ID="test" />)
    expect(component).toMatchSnapshot()
  })
  it('renders correctly with value', async () => {
    const component = render(<TextInput ID="test" value="test" />)
    expect(component).toMatchSnapshot()
  })
  it('renders label correctly', async () => {
    const component = render(<TextInput ID="test" label="label" />)
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
  it('should clear text on icon right press', async () => {
    const component = render(<TextInput ID="test" value="test" />)
    const iconButton = component.getByTestId('test/RightIcon')
    expect(iconButton.children[0].props.name).toBe('cross')
    await fireEvent.press(iconButton)
    expect(component).toMatchSnapshot()
    // const textInput = await component.getByTestId('text-input')
    // expect(textInput.props.value).toBe('')
  })
})

describe('PasswordInput', () => {
  it('renders correctly', async () => {
    const component = render(<PasswordInput ID="test" />)
    expect(component).toMatchSnapshot()
  })
  it('renders correctly with value', async () => {
    const component = render(<PasswordInput ID="test" value="test" />)
    expect(component).toMatchSnapshot()
  })
  it('shows password on icon press', async () => {
    const component = render(<PasswordInput ID="test" value="test" />)
    const iconButton = component.getByTestId('test/RightIcon')
    fireEvent.press(iconButton)
    expect(component).toMatchSnapshot()
    fireEvent.press(iconButton)
    expect(component).toMatchSnapshot()
  })
})

describe('EmailInput', () => {
  it('renders correctly', async () => {
    const component = render(<EmailInput ID="test" />)
    expect(component).toMatchSnapshot()
  })
  it('renders correctly with value', async () => {
    const component = render(<EmailInput ID="test" value="test" />)
    expect(component).toMatchSnapshot()
  })
})
