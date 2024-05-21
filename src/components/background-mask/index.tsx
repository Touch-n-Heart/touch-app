import React from 'react'

export function BackgroundMask({ children }: { children?: React.ReactNode }) {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <img
        src="/images/top-grad.png"
        className="absolute w-[140vw] h-[140vw] -top-[20vw] -left-[20vw] -z-10 rotate-[45deg]"
      />
      <img
        src="/images/bottom-grad.png"
        className="absolute w-[140vw] h-[140vw] top-[20vw] left-[100vw] -z-20 -rotate-[45deg]"
      />
      <div className="w-full h-full overflow-auto relative z-50">{children}</div>
    </div>
  )
}
