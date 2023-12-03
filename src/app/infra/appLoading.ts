import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'

import { loadFontsAsync } from '$assets/fonts'
import { loadIconsAsync } from '$assets/icons'
import { loadImagesAsync } from '$assets/images'
import * as crashlytics from '$infra/crashlytics'

export const useAppLoading = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  const loadAppAsync = useCallback(async () => {
    try {
      await loadFontsAsync()
      await loadImagesAsync()
      await loadIconsAsync()
      crashlytics.init()
    } catch (e) {
      console.warn(e)
    } finally {
      setLoadingComplete(true)
      await SplashScreen.hideAsync()
    }
  }, [])

  useEffect(() => {
    loadAppAsync()
  }, [loadAppAsync])

  return isLoadingComplete
}
