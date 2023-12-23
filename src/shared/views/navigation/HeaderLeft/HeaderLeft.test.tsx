import { render } from '@testing-library/react-native'

import { HeaderLeft } from './HeaderLeft'

describe('HeaderLeft', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<HeaderLeft canGoBack />)
    expect(toJSON()).toMatchSnapshot()
  })
})
