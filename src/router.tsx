import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import HomePage from './pages/home'
import WelcomePage from './pages/welcome'
import MatchPage from './pages/match'
import CreateAccountPage from './pages/create-account'
import FeedPage from './pages/feed'
import ChatPage from './pages/chat'
import ProfilePage from './pages/profile'

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
    path: '/feed',
    Component: FeedPage,
  },
  {
    path: '/chat',
    Component: ChatPage,
  },
  {
    path: '/profile',
    Component: ProfilePage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
  {
    path: '/create-account',
    Component: CreateAccountPage,
  },
  {
    path: '/*',
    Component: ErrorPage,
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
