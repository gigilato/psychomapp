import { render } from '@testing-library/react-native'
import React from 'react'

import { QueryWrapper } from '$jest/jest.wrappers'

import { ProfileScreen } from './ProfileScreen'

describe('ProfileScreen', () => {
  it('should renders correctly', () => {
    const { toJSON } = render(<ProfileScreen />, { wrapper: QueryWrapper })
    expect(toJSON()).toMatchSnapshot()
  })
})
