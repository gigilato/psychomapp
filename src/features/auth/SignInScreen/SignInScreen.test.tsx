import { render } from '@testing-library/react-native'

import { SignInScreen } from './SignInScreen'

describe('SignInScreen', () => {
  it('renders without error', () => {
    render(<SignInScreen />)
  })
})
