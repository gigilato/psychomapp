import { render } from '@testing-library/react-native'
import React from 'react'

import { ProfileSetting } from './ProfileSetting'

describe('ProfileSetting', () => {
  it('should renders correctly', () => {
    const { toJSON } = render(<ProfileSetting ID="" content="content" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should renders with icon', () => {
    const { toJSON } = render(<ProfileSetting ID="" content="content" icon="activity" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('should renders with link', () => {
    const { toJSON } = render(
      <ProfileSetting ID="" content="content" icon="activity" type="link" />
    )
    expect(toJSON()).toMatchSnapshot()
  })

  it('should renders with navigation', () => {
    const { toJSON } = render(
      <ProfileSetting ID="" content="content" icon="activity" type="navigation" />
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
