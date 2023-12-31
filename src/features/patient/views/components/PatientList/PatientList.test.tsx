import { render } from '@testing-library/react-native'

import { usePatients } from '$features/patient/infra/controllers/usePatients'
import { mockPatientList } from '$features/patient/infra/mocks/mockPatients'
import { QueryWrapper } from '$jest/jest.wrappers'

import { PatientList } from './PatientList'

jest.mock('$features/patient/infra/controllers/usePatients', () => ({
  usePatients: jest.fn(),
}))

describe('PatientList', () => {
  it('should render correctly', async () => {
    ;(usePatients as jest.Mock).mockImplementation(() => ({
      data: mockPatientList,
      isLoading: false,
      error: false,
    }))

    const Component = render(<PatientList />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })

  it('should render loading', async () => {
    ;(usePatients as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      error: false,
    }))

    const Component = render(<PatientList />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })

  it('should render error', async () => {
    ;(usePatients as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      error: true,
    }))

    const Component = render(<PatientList />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })
})
