import React, { useEffect, useMemo, useState } from 'react'
import { LogoIcon } from '../logo'
import data from '@/config/mbti-data.json'
import { useTranslation } from 'react-i18next'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from '@/components/ui/carousel'
import { BackgroundGradient } from '../ui/background-gradient'
import { ConnectButton, useCurrentAccount, useSuiClientMutation } from '@mysten/dapp-kit'
import { motion } from 'framer-motion'
import { TConductorInstance } from 'react-canvas-confetti/dist/types'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { TransactionBlock } from '@mysten/sui.js/transactions'
import { Link } from 'react-router-dom'
import { Loader2Icon } from 'lucide-react'
import { ADMIN_CAP, MINT_TO, NFT_OBJ_TYPE } from '@/lib/constants'
import { signer } from '@/lib/sui'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

function PersonalityList() {
  // use memo
  const list = useMemo(() => data.filter((item) => item.level === '1'), [])
  const { t } = useTranslation('translation')
  const account = useCurrentAccount()
  const { mutateAsync: waitForTransactionBlock } = useSuiClientMutation('waitForTransactionBlock')
  const { mutateAsync: signAndExecuteTransactionBlock } = useSuiClientMutation('signAndExecuteTransactionBlock')
  const { mutateAsync: getOwnedObjects } = useSuiClientMutation('getOwnedObjects')
  const [conductor, setConductor] = useState<TConductorInstance>()
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPending, setIsPending] = useState(false)
  const [fields, setFields] = useState<Record<string, string>>()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor)
  }

  const fetchFields = async () => {
    if (!account) {
      return
    }

    setIsPending(true)
    try {
      const objects = await getOwnedObjects({
        owner: account.address,
        options: { showType: true, showContent: true },
        filter: { StructType: NFT_OBJ_TYPE },
      })

      const currentObject = objects.data.at(-1)
      const fields = (
        currentObject?.data?.content?.dataType === 'moveObject' ? currentObject?.data?.content?.fields : null
      ) as Record<string, string>
      setFields(fields)
      console.log('fields', fields)
    } finally {
      setIsPending(false)
    }
  }

  useEffect(() => {
    fetchFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  const onMintOrView = async () => {
    if (fields) {
      setOpen(true)
      return
    }

    setIsPending(true)
    try {
      if (!account) {
        return
      }

      const txb = new TransactionBlock()

      const item = list[current]
      txb.moveCall({
        arguments: [
          txb.object(ADMIN_CAP),
          txb.pure.string('John'),
          txb.pure.string(item.personality),
          txb.pure.u8(Number(item.level)),
          txb.pure.string("I'm Jogn"),
          txb.pure.string(item.url.slice(0, item.url.lastIndexOf('/'))),
          txb.pure.address(account.address),
        ],
        target: MINT_TO,
      })

      const tx = await signAndExecuteTransactionBlock({
        signer,
        transactionBlock: txb,
      })

      await waitForTransactionBlock({
        digest: tx.digest,
      })

      // setImageUrl(nft[0].url)
      fetchFields()

      conductor?.shoot()
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="flex flex-col pb-6 space-y-4">
      <h2 className="px-6 text-xl">{fields ? 'MBTIs' : 'Choose Your MBTI'}</h2>
      <div className="space-y-8">
        <Carousel setApi={setApi}>
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

        {/* <div>active: {current}</div> */}

        {/* <h2 className="px-6 text-xl">Step2: {t('claim-nft')}</h2> */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {account ? (
            <>
              <motion.button
                className="relative px-4 py-2 select-none group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={isPending}
              >
                <div className="absolute inset-0 rounded-lg group-disabled:bg-none group-disabled:bg-slate-500 bg-gradient-to-r from-indigo-500 to-purple-500" />
                <div
                  onClick={onMintOrView}
                  className="[letter-spacing:0.12rem] flex items-center flex-nowrap space-x-4 px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent"
                >
                  {fields ? <span>View Your NFT</span> : <span>{t('choose-mbti')}</span>}
                  {isPending && <Loader2Icon className="animate-spin" />}
                </div>
              </motion.button>
              {!!fields && (
                <Link to="/profile">
                  <motion.button
                    className="relative px-4 py-2 select-none group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isPending}
                  >
                    <div className="absolute inset-0 rounded-lg group-disabled:bg-none group-disabled:bg-slate-500 bg-gradient-to-r from-indigo-500 to-purple-500" />
                    <div className="[letter-spacing:0.12rem] flex items-center flex-nowrap space-x-4 px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent">
                      <span>Upgrade Your NFT</span>
                    </div>
                  </motion.button>
                </Link>
              )}
            </>
          ) : (
            <ConnectButton />
          )}
        </div>

        {/* <h2 className="px-6 text-xl">Step3: {t('get-started')}</h2>
        <div className="flex items-center justify-center">
          <motion.button
            className="w-[302px] p-[3px] relative select-none group"
            disabled={!claimed}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="absolute inset-0 rounded-lg group-disabled:bg-slate-500 group-disabled:[background-image:none] bg-gradient-to-r from-indigo-500 to-purple-500" />
            <div
              onClick={onMint}
              className="[letter-spacing:0.12rem] px-8 py-2 text-2xl rounded-[6px] font-bold relative group transition duration-200 text-white bg-transparent"
            >
              {t('get-started')}
            </div>
          </motion.button>
        </div> */}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your NFT</DialogTitle>
          </DialogHeader>
          <div className="overflow-hidden">
            {fields ? (
              <>
                <div className="flex flex-col space-y-4">
                  <div className="mx-auto p-6 border rounded-lg w-[200px] h-[200px]">
                    <img src={'/images/personality/Adventurer-2-Britney%20Spears.svg'} />
                  </div>
                  <h2>Fame: {fields.fame}</h2>
                  <div>Desc: {fields.desc}</div>
                  <div className="flex">
                    <span>Id: </span>
                    <a
                      target="_blank"
                      className="block overflow-hidden text-blue-300 underline text-ellipsis whitespace-nowrap"
                      rel="noopenner norefferer noreferrer"
                      href={`https://suiscan.xyz/${import.meta.env.VITE_SUI_NETWORK}/object/${
                        (fields.id as unknown as Record<string, string>).id
                      }`}
                    >
                      {(fields.id as unknown as Record<string, string>).id}
                    </a>
                  </div>
                </div>
              </>
            ) : (
              <span>No data.</span>
            )}
          </div>
        </DialogContent>
      </Dialog>
      <Realistic onInit={onInit} />
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
          <h1 className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text">Generate NFT</h1>
        </div>
        <ConnectButton />
      </header>
      <main className="px-2 space-y-8">
        <PersonalityList />
      </main>
    </div>
  )
}
