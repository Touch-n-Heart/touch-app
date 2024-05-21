import React from 'react'
import { Header } from '../header'
import { BackgroundMask } from '../background-mask'

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page?: React.ReactElement) => {
  return (
    <div className="h-min-screen">
      <Header />
      {page}
    </div>
  )
}

export const getBackgroundMaskLayout = (page: React.ReactElement) => {
  return <BackgroundMask>{page}</BackgroundMask>
}
