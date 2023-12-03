import * as SplashScreen from 'expo-splash-screen'
import { useCallback, useEffect, useState } from 'react'

import { loadFontsAsync } from '$assets/fonts'
import { loadImagesAsync } from '$assets/images'

export const useAppLoading = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false)

  const loadAppAsync = useCallback(async () => {
    try {
      SplashScreen.preventAutoHideAsync()

      await loadFontsAsync()
      await loadImagesAsync()
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
