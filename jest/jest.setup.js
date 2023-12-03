import fetchMock from 'jest-fetch-mock'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

fetchMock.enableMocks()

jest.useFakeTimers()

// eslint-disable-next-line
require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests();


jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

// jest.mock('react-native-svg')

jest.mock('react-native-reanimated', () => {
  return {
    ...require('react-native-reanimated/mock'),
    Layout: {
      easing: jest.fn(),
    },
  }
})

// jest.mock('@gorhom/bottom-sheet', () => ({
//   __esModule: true,
//   ...require('@gorhom/bottom-sheet/mock'),
// }))

jest.mock('$atoms/Image/Image.lib', () => ({
  ...jest.requireActual('$atoms/Image/Image.lib'),
  useRatioImage: () => ({
    width: 100,
    height: 100,
  }),
}))

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

// jest.mock('@react-native-firebase/remote-config', () => ({
//   __esModule: true,
//   default: () => ({
//     setDefaults: jest.fn(),
//     getString: jest.fn(),
//     getBoolean: jest.fn(),
//     getNumber: jest.fn(),
//   }),
// }))

// jest.mock('@shopify/react-native-skia', () => {
//   const { View } = require('react-native')
//   return {
//     Skia: {
//       Path: {
//         Make: () => ({
//           addCircle: jest.fn(),
//         }),
//       },
//     },
//     vec: () => ({ x: 0, y: 0 }),
//     Canvas: View,
//     Path: View,
//     Group: View,
//   }
// })

global.console = {
  ...console,
  // uncomment to ignore a specific log level
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}
