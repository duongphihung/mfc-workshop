import { create } from 'zustand'

interface SystemStoreState {
  size?: string
  setWithApp: (param: string) => void
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export const useSystemStore = create<SystemStoreState>((set) => ({
  size: undefined,
  setWithApp: (param: string) => set(() => ({ size: param })),
  collapsed: false,
  setCollapsed: (value: boolean) => set(() => ({ collapsed: value }))
}))
