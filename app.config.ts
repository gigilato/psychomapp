import { ExpoConfig, ConfigContext } from '@expo/config'

import appVersion from './app.version.json'

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "Psychom'App",
    slug: 'psychomapp',
    version: appVersion.expo.version,
    orientation: 'default',
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
    hooks: {
      postPublish: [
        {
          file: 'sentry-expo/upload-sourcemaps',
          config: {
            organization: 'psychomapp',
            project: 'mobile',
            authToken: '40ab974ebf78475f96451f353da3951c086cb18619cd4377bd79f5de3b1dd120',
          },
        },
      ],
    },
    plugins: ['sentry-expo'],
  }
}
