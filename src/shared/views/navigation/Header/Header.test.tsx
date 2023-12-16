import { render } from '@testing-library/react-native'
import React from 'react'

import { Center, Text } from '$atoms'

import { Header } from './Header'

describe('Header', () => {
  it('should renders correctly', () => {
    const { toJSON } = render(<Header />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should renders with children', () => {
    const { toJSON } = render(
      <Header>
        <Center className="flex-1">
          <Text>Header</Text>
        </Center>
      </Header>
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
