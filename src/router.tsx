import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'
import WelcomePage from './pages/welcome'
import MatchPage from './pages/match'

import { AppRouteObject } from './types/global.d'

export const routerObjects: AppRouteObject[] = [
  {
    path: '/',
    Component: WelcomePage,
  },
  {
    path: '/match',
    Component: MatchPage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
]

export function createRouter(): ReturnType<typeof createBrowserRouter> {
  const routeWrappers = routerObjects.map((router) => {
    // @ts-ignore TODO: better type support
    const getLayout = router.Component?.getLayout || getDefaultLayout
    const Component = router.Component
    const page = Component ? getLayout(<Component />) : getDefaultLayout()
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createBrowserRouter(routeWrappers)
}
