import React, { useMemo, useState } from 'react'
import { LogoIcon } from '../logo'
import data from '@/config/mbti-data.json'
import { useTranslation } from 'react-i18next'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { BackgroundGradient } from '../ui/background-gradient'
import {
  ConnectButton,
  useCurrentAccount,
  useSignAndExecuteTransactionBlock,
  useSuiClientMutation,
} from '@mysten/dapp-kit'
import { motion } from 'framer-motion'
import { TConductorInstance } from 'react-canvas-confetti/dist/types'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { TransactionBlock } from '@mysten/sui.js/transactions'
import { Link } from 'react-router-dom'

function PersonalityList() {
  // use memo
  const list = useMemo(() => data.filter((item) => item.level === '1'), [])
  const { t } = useTranslation('translation')
  const account = useCurrentAccount()
  const { mutateAsync: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock()
  const { mutateAsync: waitForTransactionBlock } = useSuiClientMutation('waitForTransactionBlock')
  const [conductor, setConductor] = useState<TConductorInstance>()

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor)
  }

  const onMint = async () => {
    const transactionBlock = new TransactionBlock()
    transactionBlock.moveCall({
      arguments: [
        transactionBlock.object('0x4a341d8551eb2dedd0095c57e06a64bd4aa454e629beb48694040c65045a2cb1'),
        transactionBlock.pure.string('Daniel Craig'),
        transactionBlock.pure.string('Virtuoso'),
        transactionBlock.pure.string('Bold and practical experimenters, masters of all kinds of tools.'),
      ],
      target: '0x59b94aaeaa16165fd4e6b384b1ab889790f5f6b01c02a3a1636ab811dfb8e5a1::touch_level::claim',
    })

    const tx = await signAndExecuteTransactionBlock({
      transactionBlock,
    })
    await waitForTransactionBlock({
      digest: tx.digest,
    })

    conductor?.run({
      speed: 0.3,
    })
  }

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="px-6 text-xl">{t('choose-mbti')}</h2>
      <div className="space-y-8">
        <Carousel>
          <CarouselContent>
            {list.map((item, index) => (
              <CarouselItem key={item.personality} className="p-6 pl-10">
                <BackgroundGradient className="h-[268px] rounded-lg space-y-4 p-4 flex flex-col">
                  <div className="flex justify-between">
                    <div className="text-white">{item.personality}</div>
                    <div className="text-white">{index + 1}</div>
                  </div>
                  <div className="flex-1 h-0 px-4">
                    <img src={`/images/personality${item.url}`} alt={item.personality} className="w-full h-full" />
                  </div>
                </BackgroundGradient>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white left-4" />
          <CarouselNext className="bg-white right-4" />
        </Carousel>

        <div className="flex items-center justify-center">
          {account ? (
            <motion.button
              className="w-[302px] p-[3px] relative select-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
              <div
                onClick={onMint}
                className="[letter-spacing:0.12rem] px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent"
              >
                {t('mint')}
              </div>
            </motion.button>
          ) : (
            <ConnectButton />
          )}
        </div>

        <Realistic onInit={onInit} />
      </div>
    </div>
  )
}

export function Signup() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between px-2 py-3 space-x-3 h-[64px]">
        <div className="flex items-center space-x-3">
          <Link to={'/'}>
            <LogoIcon className="w-8 h-8" />
          </Link>
          <h1 className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">Signup</h1>
        </div>
        <ConnectButton />
      </header>
      <main>
        <PersonalityList />
      </main>
    </div>
  )
}
