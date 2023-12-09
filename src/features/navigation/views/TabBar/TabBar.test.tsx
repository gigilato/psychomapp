import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { render } from '@testing-library/react-native'
import React from 'react'

import { TabBar } from './TabBar'

const mockProps: BottomTabBarProps = {
  descriptors: {},
  state: {
    index: 0,
    history: [],
    key: 'key',
    routeNames: ['routeNames'],
    routes: [],
    stale: false,
    type: 'tab',
  },
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
    reset: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    canGoBack: jest.fn(),
    getId: jest.fn(),
    getState: jest.fn(),
    getParent: jest.fn(),
    setParams: jest.fn(),
    emit: jest.fn(),
  },
  insets: { bottom: 0, left: 0, right: 0, top: 0 },
}

describe('TabBar', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<TabBar {...mockProps} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
