import { render } from '@testing-library/react-native'

import { CalendarHeader } from './CalendarHeader'

describe('CalendarHeader', () => {
  it('should render correctly', async () => {
    const Component = render(<CalendarHeader />)

    expect(Component).toMatchSnapshot()
  })
})
