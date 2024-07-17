import { matchRoutes, Outlet, useLocation } from 'react-router-dom'
import _ from 'lodash'
import { RouteType } from '@/lib/react-router/types'
import { Button } from '@/stories/Button'
import { useCurrentAppTheme, useSetAppTheme } from '@/store/theme.store'

export const LayoutWrapper = ({ appRoutes }: { appRoutes: RouteType[] }) => {
  const location = useLocation()
  const currentAppTheme = useCurrentAppTheme()
  const setAppTheme = useSetAppTheme()

  // @ts-ignore
  const matchedRoute = matchRoutes(appRoutes, location)
  // @ts-ignore
  const layout = _.last(matchedRoute)?.route?.layout || {}

  return (
    <div className={'w-screen h-screen'}>
      <div>
        <header className="min-h-[61px] border-2 flex w-full items-center">
          <Button
            onClick={() => {
              setAppTheme(currentAppTheme === 'light' ? 'dark' : 'light')
            }}
            label={
              currentAppTheme === 'light' ? 'Switch to dark' : 'Switch to light'
            }
          />
        </header>
      </div>
      {/*---CONTENT---*/}
      <div>
        <Outlet />
      </div>
    </div>
  )
}
