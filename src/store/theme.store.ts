import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { useShallow } from 'zustand/react/shallow'

type ThemeStoreState = {
  theme: 'light' | 'dark' // Assuming these are the only two themes. Adjust as needed.
  setTheme: (theme: 'light' | 'dark') => void
}

const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme: 'light' | 'dark') => {
        const root = window.document.documentElement
        const currentTheme = get().theme

        if (currentTheme !== theme) {
          root.classList.remove(currentTheme)
          root.classList.add(theme)

          set({ theme })
        }
      },
    }),
    {
      name: 'theme-storage',
    }
  )
)

const useCurrentAppTheme = () =>
  useThemeStore(useShallow((state) => state.theme))
const useSetAppTheme = () =>
  useThemeStore(useShallow((state) => state.setTheme))

export { useCurrentAppTheme, useSetAppTheme }
