import { RouteObject } from 'react-router-dom'

type AppRouteObject = RouteObject & {
  Component?: {
    getLayout?: (Component: React.ReactElement) => JSX.Element
  }
}

declare global {
  interface ImportMetaEnv {
    VITE_SUI_NETWORK: 'devnet' | 'mainnet' | undefined
  }
}
