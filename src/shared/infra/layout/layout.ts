import { create } from 'zustand'

type LayoutState = {
  tabBarHeight: number
  isTabBarVisible: boolean
}

export const useLayoutStore = create<LayoutState>((set) => ({
  tabBarHeight: 0,
  isTabBarVisible: true,
}))

export const setTabBarHeight = (height: number) => {
  useLayoutStore.setState({ tabBarHeight: height })
}

export const setTabBarVisibility = (isTabBarVisible: boolean) => {
  useLayoutStore.setState({ isTabBarVisible })
}
