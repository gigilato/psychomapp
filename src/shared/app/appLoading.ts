import { SplashScreen } from 'expo-router'
import { useCallback, useEffect } from 'react'
import { create } from 'zustand'

import { loadFontsAsync } from '$assets/fonts'
import { loadIconsAsync } from '$assets/icons'
import { loadImagesAsync } from '$assets/images'
import { restoreSessionAsync, useAuthStore } from '$infra/auth'
import * as crashlytics from '$infra/crashlytics'
import * as remoteConfig from '$infra/remoteConfig'

type AppLoadingState = { isLoadingComplete: boolean }
export const useAppStore = create<AppLoadingState>((set) => ({
  isLoadingComplete: false,
}))

export const useAppLoading = () => {
  const isLoadingComplete = useAppStore((state) => state.isLoadingComplete)
  const hasRestoredSession = useAuthStore((state) => state.hasSessionRestored)

  const loadAppAsync = useCallback(async () => {
    try {
      await loadFontsAsync()
      await loadImagesAsync()
      await loadIconsAsync()
      crashlytics.init()
      await remoteConfig.init()
    } catch (e) {
      console.warn(e)
    } finally {
      useAppStore.setState({ isLoadingComplete: true })
      SplashScreen.hideAsync()
    }
  }, [])

  useEffect(() => {
    loadAppAsync()
    restoreSessionAsync()
  }, [loadAppAsync])

  return isLoadingComplete && hasRestoredSession
}
