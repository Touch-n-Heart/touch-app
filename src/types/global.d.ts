import { RouteObject } from 'react-router-dom'

type AppRouteObject = RouteObject & {
  Component?: {
    getLayout?: (Component: React.ReactElement) => JSX.Element
  }
}

declare global {
  interface ImportMetaEnv {
    VITE_SUI_NETWORK: 'devnet' | 'mainnet' | undefined

    VITE_SUI_CONTRACT_PKG_ID: string
    VITE_SUI_CONTRACT_ADMIN_CAP: string
    VITE_SUI_CONTRACT_AIRDROP_OBJ: string
    VITE_SUI_CONTRACT_TOPN_OBJ: string
    VITE_SUI_CONTRACT_TOUCH_SUPPLY: string
    VITE_SUI_CONTRACT_TOUCH_NEED_FOR: string
    VITE_SUI_CONTRACT_ELIGIBLE_OBJ: string
    VITE_SUI_CONTRACT_ALL_NFT_INFOS: string
  }
}
