import { render } from '@testing-library/react-native'

import { QueryWrapper } from '$jest/jest.wrappers'

import { PatientForm } from './PatientForm'

describe('PatientForm', () => {
  it('should render correctly', async () => {
    const Component = render(<PatientForm onSubmit={jest.fn()} />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })
})
