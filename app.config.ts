import { ExpoConfig, ConfigContext } from '@expo/config'

import appVersion from './app.version.json'

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "Psychom'App",
    slug: 'psychomapp',
    version: appVersion.expo.version,
    orientation: 'default',
    scheme: 'psychomapp',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    runtimeVersion: { policy: 'sdkVersion' },
    ios: {
      buildNumber: appVersion.expo.ios.buildNumber,
      bundleIdentifier: 'com.psychomapp.mobile',
      supportsTablet: true,
      googleServicesFile: './google-services/GoogleService.plist',
    },
    android: {
      package: 'com.psychomapp.mobile',
      versionCode: appVersion.expo.android.versionCode,
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      googleServicesFile: './google-services/google-services.json',
      intentFilters: [
        { action: 'SEND', data: [{ scheme: 'mailto' }], category: ['DEFAULT'] },
        { action: 'DIAL', data: [{ scheme: 'tel' }], category: ['DEFAULT', 'BROWSABLE'] },
      ],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      eas: { projectId: '3b9b3761-b746-4bce-b3f2-f32fefb45c93' },
    },
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'psychomapp',
            project: 'mobile',
          },
        },
      ],
    },
    plugins: [
      'sentry-expo',
      ['expo-build-properties', { ios: { useFrameworks: 'static', deploymentTarget: '13.0' } }],
      '@react-native-firebase/app',
    ],
  }
}
