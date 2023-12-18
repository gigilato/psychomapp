import { render } from '@testing-library/react-native'
import React from 'react'

import { ErrorState } from './ErrorState'

describe('ErrorState', () => {
  it('should render correctly', () => {
    const { toJSON } = render(<ErrorState type="empty" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should render with custom message', () => {
    const { toJSON } = render(<ErrorState type="empty" message="custom message" />)
    expect(toJSON()).toMatchSnapshot()
  })
})
