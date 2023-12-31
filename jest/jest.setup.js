import fetchMock from 'jest-fetch-mock'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

fetchMock.enableMocks()

jest.useFakeTimers()

require('react-native-reanimated/src/reanimated2/jestUtils').setUpTests()

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')

jest.mock('react-native-reanimated', () => {
  return {
    ...require('react-native-reanimated/mock'),
    Layout: {
      easing: jest.fn(),
    },
    useAnimatedKeyboard: () => ({ height: { value: 0 }, state: { value: 0 } }),
  }
})

jest.mock('$atoms/Image/Image.lib', () => ({
  ...jest.requireActual('$atoms/Image/Image.lib'),
  useRatioImage: () => ({
    width: 100,
    height: 100,
  }),
}))

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)

jest.mock('@react-native-firebase/remote-config', () => ({
  __esModule: true,
  default: () => ({
    setDefaults: jest.fn(),
    getString: jest.fn(),
    getBoolean: jest.fn(),
    getNumber: jest.fn(),
  }),
}))

jest.mock('@react-native-firebase/analytics', () => ({
  __esModule: true,
  default: () => ({
    logEvent: jest.fn(),
    setUserProperty: jest.fn(),
    setUserId: jest.fn(),
  }),
}))

jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(),
}))

jest.mock('react-native-keyboard-controller', () =>
  require('react-native-keyboard-controller/jest')
)

jest.mock('@shopify/react-native-skia', () => {
  const { View } = require('react-native')
  return {
    Skia: {
      Path: {
        Make: () => ({
          moveTo: jest.fn(),
          lineTo: jest.fn(),
          cubicTo: jest.fn(),
          close: jest.fn(),
          addCircle: jest.fn(),
        }),
      },
    },
    vec: jest.fn(),
    Canvas: View,
    Path: View,
    LinearGradient: View,
    Rect: View,
  }
})

jest.mock('$infra/analytics', () => ({
  setConsent: jest.fn(),
  setUser: jest.fn(),
  setUserProperty: jest.fn(),
  setCurrentScreen: jest.fn(),
  clearUser: jest.fn(),
  logEvent: jest.fn(),
  logScreen: jest.fn(),
  useAnalyticsStore: (passedFunction) => {
    const data = {
      currentUserId: undefined,
      currentScreen: '',
      consents: { ga: true, segment: true },
    }
    return passedFunction(data)
  },
}))

jest.mock('$infra/auth', () => ({
  useAuthStore: (passedFunction) => {
    const data = {
      hasRestoredSession: true,
      isAuthenticated: false,
      userId: 'userId',
    }
    return passedFunction(data)
  },
  restoreSessionAsync: jest.fn(),
  signInAsync: jest.fn(),
  signOutAsync: jest.fn(),
  resetPasswordAsync: jest.fn(),
}))

jest.mock('$infra/auth', () => ({
  useAuthStore: (passedFunction) => {
    const data = {
      profile: {
        firstname: 'firstname',
        lastname: 'lastname',
        job: 'job',
        gender: 'male',
        email: 'email@email.com',
      },
      isAuthenticated: false,
      userId: 'userId',
    }
    return passedFunction(data)
  },
  restoreSessionAsync: jest.fn(),
  signInAsync: jest.fn(),
  signOutAsync: jest.fn(),
  resetPasswordAsync: jest.fn(),
}))

function MockSkeleton({ children }) {
  return <>{children}</>
}
MockSkeleton.Group = ({ children }) => <>{children}</>
jest.mock('moti/skeleton', () => ({ Skeleton: MockSkeleton }))

jest.mock('@gorhom/bottom-sheet', () => ({
  __esModule: true,
  ...require('@gorhom/bottom-sheet/mock'),
}))

global.console = {
  ...console,
  // uncomment to ignore a specific log level
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn(),
}
