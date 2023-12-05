import { render } from '@testing-library/react-native'

import { useSignIn } from '$features/auth/infra/controllers/useSignIn'

import { SignInForm } from './SignInForm'

jest.mock('$features/auth/infra/controllers/useSignIn', () => ({
  useSignIn: jest.fn(),
}))

describe('SignInForm', () => {
  it('should render the form correctly', () => {
    ;(useSignIn as jest.Mock).mockImplementation(() => ({
      mutateAsync: jest.fn(),
      isPending: false,
    }))
    const component = render(<SignInForm />)
    expect(component).toMatchSnapshot()
  })

  it('should render the form loading', () => {
    ;(useSignIn as jest.Mock).mockImplementation(() => ({
      mutateAsync: jest.fn(),
      isPending: true,
    }))
    const component = render(<SignInForm />)
    expect(component).toMatchSnapshot()
  })
})
