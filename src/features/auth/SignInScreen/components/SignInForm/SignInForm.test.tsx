import { render } from '@testing-library/react-native'

import { SignInForm } from './SignInForm'

describe('SignInForm', () => {
  it('should render the form correctly', () => {
    const component = render(<SignInForm />)
    expect(component).toMatchSnapshot()
  })
})
