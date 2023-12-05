import { render } from '@testing-library/react-native'

import { SignInScreen } from './SignInScreen'

jest.mock('$features/auth/infra/controllers/useSignIn', () => ({
  useSignIn: () => ({
    mutateAsync: jest.fn(),
    isPending: false,
  }),
}))

describe('SignInScreen', () => {
  it('renders without error', () => {
    render(<SignInScreen />)
  })
})
