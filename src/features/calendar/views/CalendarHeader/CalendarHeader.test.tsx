import { render } from '@testing-library/react-native'

import { CalendarHeader } from './CalendarHeader'

jest.mock('./CalendarHeader.lib', () => {
  return {
    ...jest.requireActual('./CalendarHeader.lib'),
    date: new Date(2024, 0, 3),
    interval: Array.from({ length: 7 }, (_, i) => new Date(2024, 0, i + 1)),
  }
})

describe('CalendarHeader', () => {
  it('should render correctly', async () => {
    const Component = render(<CalendarHeader />)
    expect(Component).toMatchSnapshot()
  })
})
