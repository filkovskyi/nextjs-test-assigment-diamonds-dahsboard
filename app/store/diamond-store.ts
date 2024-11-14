import { create } from 'zustand'
import { getLocalStorage, setLocalStorage } from '@/app/lib/localStorage'

interface DiamondState {
  balance: number
  addDiamonds: (amount: number) => void
  resetBalance: () => void
  initializeBalance: (userId: string) => void
}

export const useDiamondStore = create<DiamondState>()((set) => ({
  balance: 0,
  addDiamonds: (amount) => {
    set((state) => {
      const newBalance = state.balance + amount
      const userId = getLocalStorage('currentUserId')
      if (userId) {
        setLocalStorage(`diamond_balance_${userId}`, newBalance.toString())
      }
      return { balance: newBalance }
    })
  },
  resetBalance: () => {
    set(() => {
      const userId = getLocalStorage('currentUserId')
      if (userId) {
        setLocalStorage(`diamond_balance_${userId}`, '0')
      }
      return { balance: 0 }
    })
  },
  initializeBalance: (userId: string) => {
    setLocalStorage('currentUserId', userId)
    const storedBalance = getLocalStorage(`diamond_balance_${userId}`)
    set({ balance: storedBalance ? parseInt(storedBalance, 10) : 0 })
  },
})) 