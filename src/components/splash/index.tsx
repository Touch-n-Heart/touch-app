import React from 'react'
import { LogoWithAnimate } from '../logo'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export function Slash() {
  const { t } = useTranslation('translation')
  const navigate = useNavigate()

  const onGetStarted = () => {
    navigate('/match')
  }

  const onCreateAccount = () => {
    navigate('/create-account')
  }

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      <LogoWithAnimate />
      <div className="flex flex-col mt-20 space-y-4">
        <motion.button
          className="w-[302px] p-[3px] relative select-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div
            onClick={onCreateAccount}
            className="[letter-spacing:0.12rem] px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent"
          >
            {t('create-account')}
          </div>
        </motion.button>
        <motion.button
          className="w-[302px] p-[3px] relative select-none"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
          <div
            onClick={onGetStarted}
            className="[letter-spacing:0.12rem] px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent"
          >
            {t('get-started')}
          </div>
        </motion.button>
      </div>
    </div>
  )
}
