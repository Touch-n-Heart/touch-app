import {
  ConnectButton,
  useCurrentAccount,
  useSuiClient,
  useSignAndExecuteTransactionBlock,
  useSuiClientMutation,
} from '@mysten/dapp-kit'
import { useEffect, useState } from 'react'
import { TransactionBlock } from '@mysten/sui.js/transactions'
import {
  TOUCH_TYPE,
  NFT_OBJ_TYPE,
  TOUCH_NEED_FOR,
  TOUCH_SUPPLY,
  UPGRADE_NFT_FN,
  COIN_TYPE,
  NFT_INFOS,
  TOPN_OBJ,
  CLAIM_TOPN_FN,
} from '@/lib/constants'
import { Button } from '../ui/button'

export function Profile() {
  const currentAccount = useCurrentAccount()
  // const [walletAddr, setWalletAddr] = useState('')
  const [touBalance, setTouBalance] = useState('0')
  const [imageUrl, setImageUrl] = useState('')
  const [currentNFTInfo, setCurrentNFTInfo] = useState({
    id: '',
    personality: '',
    fame: '',
    level: '',
    url: '',
  })
  const { mutateAsync: waitForTransactionBlock } = useSuiClientMutation('waitForTransactionBlock')
  const { mutateAsync: signAndExecuteTransactionBlock } = useSignAndExecuteTransactionBlock()
  const suiClient = useSuiClient()

  const getBalance = async () => {
    if (!currentAccount) return
    // setWalletAddr(currentAccount.address)
    const { totalBalance } = await suiClient.getBalance({
      owner: currentAccount.address,
      coinType: TOUCH_TYPE,
    })
    return totalBalance
  }

  const getDecimal = async () => {
    const res = await suiClient.getCoinMetadata({
      coinType: TOUCH_TYPE,
    })
    if (res) return res.decimals
  }

  const getNFTs = async () => {
    if (!currentAccount) return
    const nft_objs = await suiClient.getOwnedObjects({
      owner: currentAccount.address,
      options: { showType: true, showContent: true },
      filter: { StructType: NFT_OBJ_TYPE },
    })
    // console.log(nft_objs.data.map(obj => obj.data?.content)
    const currentObject = nft_objs.data.at(-1)
    const fields: any =
      currentObject?.data?.content?.dataType === 'moveObject' ? currentObject?.data?.content?.fields : null
    if (fields) {
      const image_url = fields.base_url + '/' + fields.personality + '-' + fields.level + '-' + fields.fame + '.svg'
      setCurrentNFTInfo({
        id: fields.id.id,
        personality: fields.personality,
        fame: fields.fame,
        level: fields.level,
        url: image_url,
      })
      console.log('fields', fields)
      console.log(image_url.replace(' ', '%20'))
      setImageUrl(image_url)
    }
  }

  useEffect(() => {
    setTouBalance('0') // TODO: switch wallet
    const initAccount = async () => {
      const totalBalance = await getBalance()
      const decimal = await getDecimal()
      if (decimal) {
        setTouBalance((Number(totalBalance) / 10 ** decimal).toFixed(0))
      }
      await getNFTs()
    }
    initAccount()
  }, [currentAccount])

  const upgradeNFT = async () => {
    if (!currentNFTInfo.id) return

    const coin_objs = await suiClient.getOwnedObjects({
      owner: currentAccount ? currentAccount.address : '',
      options: { showType: true, showContent: true },
      filter: { StructType: COIN_TYPE },
    })
    // TODO: merge all coin objects into one and pass to upgrade contract func
    const coin_obj: any = coin_objs.data[0].data?.objectId
    // TODO: input `level` from web page input form
    const targetNFT = NFT_INFOS.filter((i) => i.personality == currentNFTInfo.personality && i.level == '3')

    const txb = new TransactionBlock()
    txb.moveCall({
      arguments: [
        txb.object(currentNFTInfo.id),
        txb.object(TOUCH_NEED_FOR),
        txb.object(TOUCH_SUPPLY),
        txb.object(coin_obj),
        txb.pure.string(currentNFTInfo.fame),
        // TODO: get one randomly from targetNFT or from input form
        txb.pure.u8(Number(targetNFT[0].level)),
      ],
      target: UPGRADE_NFT_FN,
    })

    const tx = await signAndExecuteTransactionBlock({
      transactionBlock: txb,
    })

    await waitForTransactionBlock({
      digest: tx.digest,
    })

    const targetUrl = currentNFTInfo.url
      .replace(currentNFTInfo.fame, targetNFT[0].fame)
      .replace(currentNFTInfo.level, targetNFT[0].level)
    setImageUrl(targetUrl)
    const totalBalance = await getBalance()
    const decimal = await getDecimal()
    if (decimal) {
      setTouBalance((Number(totalBalance) / 10 ** decimal).toFixed(0))
    }
  }

  const claimTouch = async () => {
    const txb = new TransactionBlock()
    txb.moveCall({
      arguments: [txb.object(TOPN_OBJ), txb.object(TOUCH_SUPPLY)],
      target: CLAIM_TOPN_FN,
    })

    const tx = await signAndExecuteTransactionBlock({
      transactionBlock: txb,
    })

    await waitForTransactionBlock({
      digest: tx.digest,
    })
  }

  return (
    <div style={{ backgroundColor: '#f3f0ff', height: '100vh' }}>
      <div className=" flex justify-between pt-4 pr-4">
        <div style={{ padding: '15px 0 0 15px' }}>
          {currentAccount && (
            <div className=" flex justify-center items-center">
              <img
                width={'30px'}
                src="https://ipfs.io/ipfs/bafybeig7cm6xn2p3wy6yw4do4o7edg5ikm77yyc3jr3tnpddonsxfnkxki/touch.png"
              />
              <div style={{ marginLeft: '5px' }}>{`Touch: ${touBalance}`}</div>
            </div>
          )}
        </div>
        {/* // TODO: tailwind cannot use here? */}
        {/* <ConnectButton className=" text-red-300 bg-red-200" style={{backgroundColor:'yellowgreen'}} /> */}
        <ConnectButton />
      </div>
      <div>
        {Number(touBalance) != 0 && currentAccount && (
          <div>
            <div className=" mt-40 pl-5">
              <div>Your NFTs</div>
              <div className=" mt-10">{imageUrl && <img src={imageUrl} />}</div>
            </div>
            <div className=" mt-10">
              <div className="mt-16 flex justify-center">
                <Button onClick={upgradeNFT}>Upgrade NFT</Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {Number(touBalance) == 0 && (
          <div>
            <div className=" mt-40 pl-5">
              <div>Please Claim You $TOU</div>
            </div>
            <div className=" mt-20">
              <div className="mt-16 flex justify-center">
                <Button onClick={claimTouch}>Claim $TOU</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
