import remoteConfig from '@react-native-firebase/remote-config'

import { Log } from '$infra/logger'

import { RemoteConfigKey } from './remoteConfig.types'

export const init = async () => {
  await remoteConfig().setDefaults({
    minimumVersion: '0.0.1',
  })
  try {
    await remoteConfig().fetchAndActivate()
  } catch {
    Log.e('Error while fetching remote config')
  }
}

export const getString = (key: RemoteConfigKey) => remoteConfig().getString(key)
export const getBoolean = (key: RemoteConfigKey) => remoteConfig().getBoolean(key)
export const getNumber = (key: RemoteConfigKey) => remoteConfig().getNumber(key)
