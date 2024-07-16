import { createBrowserRouter } from 'react-router-dom'
import { LayoutWrapper } from '@/layout/LayoutWrapper'
import { convertToRouteObject } from './utils'
import exampleRoutes from './routes/exampleRoutes'

const anonymousRoutes = [...exampleRoutes]
const protectedRoutes = [...exampleRoutes]

export const getRouterConfig = (isAuthenticated: boolean) => {
  const appRoutes = !isAuthenticated
    ? [...anonymousRoutes]
    : [...protectedRoutes]

  return createBrowserRouter([
    {
      path: '/',
      element: <LayoutWrapper appRoutes={appRoutes} />,
      children: [
        {
          children: [...convertToRouteObject(appRoutes)],
        },
      ],
    },
  ])
}
