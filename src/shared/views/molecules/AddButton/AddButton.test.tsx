import { render } from '@testing-library/react-native'

import { AddButton } from './AddButton'

describe('AddButton', () => {
  it('should render correctly', async () => {
    const component = render(<AddButton ID="add" />)
    expect(component).toMatchSnapshot()
  })
})
