import { render } from '@testing-library/react-native'

import { IconButton, Button, PressableIcon, PressableText } from './Button'

describe('Button', () => {
  it('renders correctly', async () => {
    const component = render(<Button ID="" title="Title" />)
    expect(component).toMatchSnapshot()
  })
  it('renders loading correctly', async () => {
    const component = render(<Button ID="" title="Title" isLoading />)
    expect(component).toMatchSnapshot()
  })
  it('renders disabled correctly', async () => {
    const component = render(<Button ID="" title="Title" disabled />)
    expect(component).toMatchSnapshot()
  })
  it('renders error correctly', async () => {
    const component = render(<Button ID="" title="Title" error />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon right correctly', async () => {
    const component = render(<Button ID="" title="Title" iconRight="bell" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon left correctly', async () => {
    const component = render(<Button ID="" title="Title" iconLeft="bell" />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon right disabled correctly', async () => {
    const component = render(<Button ID="" title="Title" iconRight="bell" disabled />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon left disabled correctly', async () => {
    const component = render(<Button ID="" title="Title" iconLeft="bell" disabled />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon right error correctly', async () => {
    const component = render(<Button ID="" title="Title" iconRight="bell" error />)
    expect(component).toMatchSnapshot()
  })
  it('renders icon left error correctly', async () => {
    const component = render(<Button ID="" title="Title" iconLeft="bell" error />)
    expect(component).toMatchSnapshot()
  })
})

describe('IconButton', () => {
  it('renders correctly', async () => {
    const component = render(<IconButton ID="" icon="bell" />)
    expect(component).toMatchSnapshot()
  })
  it('renders loading correctly', async () => {
    const component = render(<IconButton ID="" icon="bell" isLoading />)
    expect(component).toMatchSnapshot()
  })
  it('renders disabled correctly', async () => {
    const component = render(<IconButton ID="" icon="bell" disabled />)
    expect(component).toMatchSnapshot()
  })
  it('renders error correctly', async () => {
    const component = render(<IconButton ID="" icon="bell" error />)
    expect(component).toMatchSnapshot()
  })
})

describe('PressableText', () => {
  it('renders correctly', async () => {
    const text = 'text'
    const component = render(
      <PressableText ID="test" textClassName="text-error" onPress={jest.fn()}>
        {text}
      </PressableText>
    )
    component.getByText(text)
    expect(component).toMatchSnapshot()
  })
})

describe('PressableIcon', () => {
  it('renders correctly', async () => {
    const component = render(
      <PressableIcon
        ID="test"
        className="bg-error"
        icon="anchor"
        iconClassName="text-primary-classic"
        onPress={jest.fn()}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
