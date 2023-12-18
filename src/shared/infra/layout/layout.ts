import { create } from 'zustand'

type LayoutState = {
  tabBarHeight: number
}

export const useLayoutStore = create<LayoutState>((set) => ({
  tabBarHeight: 0,
}))

export const setTabBarHeight = (height: number) => {
  useLayoutStore.setState({ tabBarHeight: height })
}
