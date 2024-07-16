import { RouteObject } from 'react-router-dom'
import { RouteType } from './types.ts'

export const convertToRouteObject = (routes: RouteType[]): RouteObject[] => {
  if (!routes) return []

  return routes.map((route) => {
    // Explicitly create index routes with type RouteObject
    const routeObject: RouteObject = {
      path: route.path,
      element: route.element,
      index: route.index,
    }

    // Add children only if defined
    const children = route.children
      ? convertToRouteObject(route.children)
      : undefined

    if (children) {
      routeObject.children = children // Combine with children
    }

    return routeObject
  })
}
