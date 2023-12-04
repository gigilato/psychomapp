import { registerRootComponent } from 'expo'
import * as SplashScreen from 'expo-splash-screen'
import { LogBox } from 'react-native'
import 'react-native-url-polyfill/auto'

import { App } from './src/app/App'

LogBox.ignoreLogs(['EventEmitter.removeListener', 'new NativeEventEmitter'])
SplashScreen.preventAutoHideAsync()

registerRootComponent(App)
