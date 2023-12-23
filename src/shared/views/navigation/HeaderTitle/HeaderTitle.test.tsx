import { render } from '@testing-library/react-native'

import { HeaderTitle } from './HeaderTitle'

describe('HeaderTitle', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<HeaderTitle>Title</HeaderTitle>)
    expect(toJSON()).toMatchSnapshot()
  })
})
