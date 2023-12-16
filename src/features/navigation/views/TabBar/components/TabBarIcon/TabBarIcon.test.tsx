import { render } from '@testing-library/react-native'

import { TabBarIcon } from './TabBarIcon'

describe('TabBarIcon', () => {
  it('should render selected', () => {
    const component = render(<TabBarIcon icon="bank" isSelected name="icon" route="/dashboard/" />)
    expect(component).toMatchSnapshot()
  })

  it('should render selected', () => {
    const component = render(
      <TabBarIcon icon="bank" isSelected={false} name="icon" route="/dashboard/profile/" />
    )
    expect(component).toMatchSnapshot()
  })
})
