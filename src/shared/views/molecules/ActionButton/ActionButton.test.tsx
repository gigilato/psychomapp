import { render } from '@testing-library/react-native'

import { ActionButton } from './ActionButton'

describe('ActionButton', () => {
  it('should render correctly', async () => {
    const component = render(<ActionButton ID="add" />)
    expect(component).toMatchSnapshot()
  })
})
