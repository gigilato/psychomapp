import { render } from '@testing-library/react-native'
import React from 'react'

import { InformationBox } from './InformationBox'

describe('InformationBox', () => {
  it('renders correctly', () => {
    const component = render(<InformationBox label="label" value="value" />)
    expect(component).toMatchSnapshot()
  })
})
