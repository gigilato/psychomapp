import { render } from '@testing-library/react-native'
import React from 'react'

import { ProfileScreen } from './ProfileScreen'

describe('TabBar', () => {
  it('should renders correctly', () => {
    const { toJSON } = render(<ProfileScreen />)
    expect(toJSON()).toMatchSnapshot()
  })
})
