import { render } from '@testing-library/react-native'

import { Icon } from './Icon'

describe('Icon', () => {
  it('renders correctly', async () => {
    const component = render(<Icon size={30} className="text-primary-electric" name="airplay" />)
    expect(component).toMatchSnapshot()
  })
})
