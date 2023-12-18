import { render } from '@testing-library/react-native'

import { QueryWrapper } from '$jest/jest.wrappers'

import { EquipmentScreen } from './EquipmentScreen'

describe('EquipmentScreen', () => {
  it('should render correctly', () => {
    render(
      <QueryWrapper>
        <EquipmentScreen />
      </QueryWrapper>
    )
  })
})
