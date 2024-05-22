import React from 'react'
import { Header } from '../header'
import { BackgroundMask } from '../background-mask'
import { Heart, SquareGanttIcon, MessageCircle, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'

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

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full bg-white border-t border-gray-300">
      <div className="flex justify-around py-2">
        {/* with icon and text */}
        <Link to="/match" className="flex flex-col items-center justify-center">
          <Heart size={24} />
          <div>Match</div>
        </Link>
        <Link to="/feed" className="flex flex-col items-center justify-center">
          <SquareGanttIcon size={24} />
          <div>Feed</div>
        </Link>
        <Link to="/chat" className="flex flex-col items-center justify-center">
          <MessageCircle size={24} />
          <div>Chat</div>
        </Link>
        <Link to="/profile" className="flex flex-col items-center justify-center">
          <Settings size={24} />
          <div>Profile</div>
        </Link>
      </div>
    </div>
  )
}

export const getAppLayout = (page: React.ReactElement) => {
  return (
    <BackgroundMask>
      <div className="flex flex-col h-screen">
        <div className="flex-1">{page}</div>
        <BottomNavbar />
      </div>
    </BackgroundMask>
  )
}
