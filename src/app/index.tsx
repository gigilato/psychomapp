import { ActivityIndicator } from 'react-native'

import { Screen } from '$atoms'
import { SignInScreen } from '$features/auth'

import { useAppLoading } from '../shared/app/appLoading'

const LoadingScreen = () => (
  <Screen className="justify-center items-center">
    <ActivityIndicator size="large" color="black" />
  </Screen>
)
const App = () => {
  const isReady = useAppLoading()
  return isReady ? <SignInScreen /> : <LoadingScreen />
}

export default App
