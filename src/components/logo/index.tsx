import React from 'react'
import { motion } from 'framer-motion'

export function LogoIcon({ className }: { className?: string }) {
  return <img src="/images/touch-icon.png" width={132} height={132} className={className} />
}

export function LogoTitle({ className }: { className?: string }) {
  return <img src="/images/touch-title.png" width={302} height={70} className={className} />
}

export function Logo() {
  return (
    <div className="inline-flex items-center justify-center relative overflow-hidden flex-col">
      <LogoIcon />
      <LogoTitle className="mt-[38px]" />
    </div>
  )
}

export function LogoWithAnimate() {
  return (
    <div className="inline-flex items-center justify-center relative overflow-hidden flex-col">
      <motion.div
        animate="animate"
        variants={{
          animate: {
            scale: [1, 1.268, 1], // Scaling sequence: normal -> enlarged -> normal
            transition: {
              duration: 2, // Duration of each loop
              repeat: Infinity, // Repeat indefinitely
              repeatType: 'loop', // Type of repetition
              ease: 'easeInOut', // Easing function for smooth transition
            },
          },
        }}
      >
        <LogoIcon />
      </motion.div>
      <LogoTitle className="mt-[38px]" />
    </div>
  )
}
