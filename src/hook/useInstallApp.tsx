import { create } from 'zustand'

interface UseInstallApp {
  isInstallApp: boolean
  setInstallApp: (isSheetOpen: boolean) => void
}

export default create<UseInstallApp>((set) => ({
  isInstallApp: true,
  setInstallApp: (isInstallApp) => set({ isInstallApp }),
}))
