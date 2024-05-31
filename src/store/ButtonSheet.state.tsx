import { create } from 'zustand'

interface StoreButtomSheet {
  isSheetOpen: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}

export const useStoreButtomSheet = create<StoreButtomSheet>((set) => ({
  isSheetOpen: false,
  setIsSheetOpen: (isSheetOpen) => set({ isSheetOpen }),
}))
