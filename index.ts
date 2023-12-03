import { registerRootComponent } from 'expo'
import * as SplashScreen from 'expo-splash-screen'
import { LogBox } from 'react-native'

import { App } from './src/app/App'

import './global.css'

LogBox.ignoreLogs(['EventEmitter.removeListener', 'new NativeEventEmitter'])
SplashScreen.preventAutoHideAsync()

registerRootComponent(App)
