import { render } from '@testing-library/react-native'

import { useObjectives } from '$features/objective/infra/controllers/useObjectives'
import { mockObjectiveList } from '$features/objective/infra/mocks/mockObjectives'
import { QueryWrapper } from '$jest/jest.wrappers'

import { ObjectiveBottomSheet } from './ObjectiveBottomSheet'

jest.mock('$features/objective/infra/controllers/useObjectives', () => ({
  useObjectives: jest.fn(),
}))

describe('ObjectiveBottomSheet', () => {
  it('should render correctly', async () => {
    ;(useObjectives as jest.Mock).mockImplementation(() => ({
      data: mockObjectiveList,
      isLoading: false,
      error: false,
    }))

    const Component = render(<ObjectiveBottomSheet />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })

  it('should render loading', async () => {
    ;(useObjectives as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: true,
      error: false,
    }))

    const Component = render(<ObjectiveBottomSheet />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })

  it('should render error', async () => {
    ;(useObjectives as jest.Mock).mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      error: true,
    }))

    const Component = render(<ObjectiveBottomSheet />, { wrapper: QueryWrapper })

    expect(Component).toMatchSnapshot()
  })
})
