import { render } from '@testing-library/react-native'

import { Image } from './Image'

describe('Image', () => {
  it('renders with contain', async () => {
    const component = render(<Image source="logo" className="h-[150]" contentFit="contain" />)
    expect(component).toMatchSnapshot()
  })

  it('renders with cover', async () => {
    const component = render(<Image source="logo" className="h-[150]" contentFit="cover" />)
    expect(component).toMatchSnapshot()
  })

  it('renders with ratio', async () => {
    const component = render(<Image source="logo" width={100} />)
    expect(component).toMatchSnapshot()
  })
})
