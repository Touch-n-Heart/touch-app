import { RouteObject } from 'react-router-dom'

type AppRouteObject = RouteObject & {
  Component?: {
    getLayout?: (Component: React.ReactElement) => JSX.Element
  }
}
