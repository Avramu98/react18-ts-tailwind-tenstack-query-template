import { ReactNode } from 'react'
import { RouteObject } from 'react-router-dom'

export type CustomRouteProperties = {
  layout?: {
    header?: ReactNode
    toolbar?: ReactNode
    drawer?: ReactNode
  }
}

export type RouteType = CustomRouteProperties &
  Omit<RouteObject, 'children'> & {
    children?: RouteType[]
  }
