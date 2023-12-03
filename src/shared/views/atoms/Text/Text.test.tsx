import { render } from '@testing-library/react-native'

import { Text } from './Text'

describe('Text', () => {
  it('renders correctly', async () => {
    const text = '1st test'
    const component = render(<Text>{text}</Text>)
    await component.findByText(text)
    expect(component).toMatchSnapshot()
  })

  it('renders with variant', async () => {
    const text = '1nd test'
    const component = render(<Text variant="title">{text}</Text>)
    await component.findByText(text)
    expect(component).toMatchSnapshot()
  })

  it('renders with overrided styles', async () => {
    const text = '3rd test'
    const className = 'text-primary-classic text-[20px]'
    const component = render(
      <Text variant="title" className={className}>
        {text}
      </Text>
    )
    await component.findByText(text)
    expect(component).toMatchSnapshot()
  })
})
