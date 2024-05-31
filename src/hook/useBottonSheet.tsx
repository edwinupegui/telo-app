import { create } from 'zustand'

interface UseBottomSheet {
  isSheetOpen: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}

export default create<UseBottomSheet>((set) => ({
  isSheetOpen: false,
  setIsSheetOpen: (isSheetOpen) => set({ isSheetOpen }),
}))
