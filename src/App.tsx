import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { getRouterConfig } from '@/lib/react-router/routerConfig'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useCurrentAppTheme } from '@/store/theme.store'
import { useEffect } from 'react'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60000,
      gcTime: 10 * (60 * 1000),
    },
  },
})

function App() {
  const currentAppTheme = useCurrentAppTheme()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.add(currentAppTheme)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={getRouterConfig(false)} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
