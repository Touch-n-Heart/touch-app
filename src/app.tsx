import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit'
import { getFullnodeUrl } from '@mysten/sui.js/client'
import '@mysten/dapp-kit/dist/index.css'

// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  devnet: { url: getFullnodeUrl('devnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
})
const defaultNetwork = import.meta.env.VITE_SUI_NETWORK || 'mainnet'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])

  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork={defaultNetwork}>
        <WalletProvider>
          <RouterProvider router={createRouter()} />
          {/* <ReactQueryDevtools /> */}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  )
}
