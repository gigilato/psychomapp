import { render } from '@testing-library/react-native'

import { Image } from './Image'

describe('Image', () => {
  it('renders with contain', async () => {
    const component = render(<Image source="icon" className="h-[150]" contentFit="contain" />)
    expect(component).toMatchSnapshot()
  })

  it('renders with cover', async () => {
    const component = render(<Image source="icon" className="h-[150]" contentFit="cover" />)
    expect(component).toMatchSnapshot()
  })
})

describe('RatioImage', () => {
  it('renders correctly', async () => {
    const component = render(<Image source="icon" width={100} />)
    expect(component).toMatchSnapshot()
  })
})
