export const CONSTANT_A = 'CONSTANT_A'

export const ACCOUNTS = [
  '0x1551c0853e5b1dcce1e02b59a3b65ce815549b798adebb721e2f1cf0d7427b6d',
  // // c21's address
  '0x8a818f623c3b11b953a383151bf57dc1f6b3759066e9754ea47833953df557d1',
  '0x9aae420e55e422f294cdf7e0c476346c8f35dd0e70ef55803bf2600a5bc3296f',
  // '0xf2b6e76f00a8a1c9de435484254f33585870682fea82aa8727d7ed95268a5232',
]
export const COIN_VALUES = [
  '20000000000',
  '126000000000',
  '180000000000',
  // 20_000_000_000,
]
export const NFT_LEVELS = [1, 1, 1]

// ================ contract deploy info =================
// objects
export const PKG_ID = import.meta.env.VITE_SUI_CONTRACT_PKG_ID
export const ADMIN_CAP = import.meta.env.VITE_SUI_CONTRACT_ADMIN_CAP
// coin
export const AIRDROP_OBJ = import.meta.env.VITE_SUI_CONTRACT_AIRDROP_OBJ
export const TOPN_OBJ = import.meta.env.VITE_SUI_CONTRACT_TOPN_OBJ
export const TOUCH_SUPPLY = import.meta.env.VITE_SUI_CONTRACT_TOUCH_SUPPLY
// nft
export const TOUCH_NEED_FOR = import.meta.env.VITE_SUI_CONTRACT_TOUCH_NEED_FOR
export const ELIGIBLE_OBJ = import.meta.env.VITE_SUI_CONTRACT_ELIGIBLE_OBJ

export const ALL_NFT_INFOS = import.meta.env.VITE_SUI_CONTRACT_ALL_NFT_INFOS

// functions
// coin
export const UPDATE_AIRDROP_FN = `${PKG_ID}::airdrop::update_airdrop`
export const CLEAR_AIRDROP_FN = `${PKG_ID}::airdrop::clear_airdrop`
export const UPDATE_TOPN_FN = `${PKG_ID}::top_n::update_topn`
export const CLAIM_AIRDROP_FN = `${PKG_ID}::touch::claim_airdrop`
export const CLAIM_TOPN_FN = `${PKG_ID}::touch::claim_topn`
// nft
export const UPGRADE_NFT_FN = `${PKG_ID}::touch_level::upgrade`
export const SET_TOUCH_NEED = `${PKG_ID}::touch_level::set_touch_need_value`
export const UPDATE_ADDRS_FN = `${PKG_ID}::touch_level::update_addrs`
export const CLAIM_FN = `${PKG_ID}::touch_level::claim`

export const UPDATE_NFT_INFOS_FN = `${PKG_ID}::touch_level::update_touch_infos`

// types
export const TOUCH_TYPE = `${PKG_ID}::touch::TOUCH`
export const COIN_TYPE = `0x2::coin::Coin<${PKG_ID}::touch::TOUCH>`
export const NFT_OBJ_TYPE = `${PKG_ID}::touch_level::TouchProfile`

// =============== NFT infos ==========================
export const NFT_INFOS = [
  {
    personality: 'Adventurer',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Adventurer-1-Nobody.svg',
    desc: 'Flexible and charming artists, always ready to explore and experience something new.',
  },
  {
    personality: 'Adventurer',
    level: '2',
    fame: 'Britney Spears',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Adventurer-2-Britney%20Spears.svg',
    desc: 'Flexible and charming artists, always ready to explore and experience something new.',
  },
  {
    personality: 'Adventurer',
    level: '2',
    fame: 'Jungkook',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Adventurer-2-Jungkook.svg',
    desc: 'Flexible and charming artists, always ready to explore and experience something new.',
  },
  {
    personality: 'Adventurer',
    level: '3',
    fame: 'Frida Kahlo',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Adventurer-3-Frida%20Kahlo.svg',
    desc: 'Flexible and charming artists, always ready to explore and experience something new.',
  },
  {
    personality: 'Adventurer',
    level: '3',
    fame: 'Kevin Costner',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Adventurer-3-Kevin%20Costner.svg',
    desc: 'Flexible and charming artists, always ready to explore and experience something new.',
  },
  {
    personality: 'Advocate',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Advocate-1-Nobody.svg',
    desc: 'Quiet and mystical, yet very inspiring and tireless idealists.',
  },
  {
    personality: 'Advocate',
    level: '2',
    fame: 'Lady Gaga',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Advocate-2-Lady%20Gaga.svg',
    desc: 'Quiet and mystical, yet very inspiring and tireless idealists.',
  },
  {
    personality: 'Advocate',
    level: '2',
    fame: 'Nicole Kidman',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Advocate-2-Nicole%20Kidman.svg',
    desc: 'Quiet and mystical, yet very inspiring and tireless idealists.',
  },
  {
    personality: 'Advocate',
    level: '3',
    fame: 'Mother Teresa',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Advocate-3-Mother%20Teresa.svg',
    desc: 'Quiet and mystical, yet very inspiring and tireless idealists.',
  },
  {
    personality: 'Advocate',
    level: '3',
    fame: 'Nelson Mandela',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Advocate-3-Nelson%20Mandela.svg',
    desc: 'Quiet and mystical, yet very inspiring and tireless idealists.',
  },
  {
    personality: 'Architect',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Architect-1-Nobody.svg',
    desc: 'Imaginative and strategic thinkers, with a plan for everything.',
  },
  {
    personality: 'Architect',
    level: '2',
    fame: 'Friedrich Nietzsche',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Architect-2-Friedrich%20Nietzsche.svg',
    desc: 'Imaginative and strategic thinkers, with a plan for everything.',
  },
  {
    personality: 'Architect',
    level: '2',
    fame: 'Michelle Obama',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Architect-2-Michelle%20Obama.svg',
    desc: 'Imaginative and strategic thinkers, with a plan for everything.',
  },
  {
    personality: 'Architect',
    level: '3',
    fame: 'Christopher Nolan',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Architect-3-Christopher%20Nolan.svg',
    desc: 'Imaginative and strategic thinkers, with a plan for everything.',
  },
  {
    personality: 'Architect',
    level: '3',
    fame: 'Elon Musk',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Architect-3-Elon%20Musk.svg',
    desc: 'Imaginative and strategic thinkers, with a plan for everything.',
  },
  {
    personality: 'Campaigner',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Campaigner-1-Nobody.svg',
    desc: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
  },
  {
    personality: 'Campaigner',
    level: '2',
    fame: 'Kelly Clarkson',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Campaigner-2-Kelly%20Clarkson.svg',
    desc: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
  },
  {
    personality: 'Campaigner',
    level: '2',
    fame: 'Meg Ryan',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Campaigner-2-Meg%20Ryan.svg',
    desc: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
  },
  {
    personality: 'Campaigner',
    level: '3',
    fame: 'Robin Williams',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Campaigner-3-Robin%20Williams.svg',
    desc: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
  },
  {
    personality: 'Campaigner',
    level: '3',
    fame: 'Will Smith',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Campaigner-3-Will%20Smith.svg',
    desc: 'Enthusiastic, creative and sociable free spirits, who can always find a reason to smile.',
  },
  {
    personality: 'Commander',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Commander-1-Nobody.svg',
    desc: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
  },
  {
    personality: 'Commander',
    level: '2',
    fame: 'Gordon Ramsay',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Commander-2-Gordon%20Ramsay.svg',
    desc: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
  },
  {
    personality: 'Commander',
    level: '2',
    fame: 'Jim Carrey',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Commander-2-Jim%20Carrey.svg',
    desc: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
  },
  {
    personality: 'Commander',
    level: '3',
    fame: 'Margaret Thatcher',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Commander-3-Margaret%20Thatcher.svg',
    desc: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
  },
  {
    personality: 'Commander',
    level: '3',
    fame: 'Steve Jobs',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Commander-3-Steve%20Jobs.svg',
    desc: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.',
  },
  {
    personality: 'Consul',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Consul-1-Nobody.svg',
    desc: 'Extraordinarily caring, social and popular people, always eager to help.',
  },
  {
    personality: 'Consul',
    level: '2',
    fame: 'Danny Glover',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Consul-2-Danny%20Glover.svg',
    desc: 'Extraordinarily caring, social and popular people, always eager to help.',
  },
  {
    personality: 'Consul',
    level: '2',
    fame: 'Jennifer Lopez',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Consul-2-Jennifer%20Lopez.svg',
    desc: 'Extraordinarily caring, social and popular people, always eager to help.',
  },
  {
    personality: 'Consul',
    level: '3',
    fame: 'Bill Clinton',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Consul-3-Bill%20Clinton.svg',
    desc: 'Extraordinarily caring, social and popular people, always eager to help.',
  },
  {
    personality: 'Consul',
    level: '3',
    fame: 'Jennifer Garner',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Consul-3-Jennifer%20Garner.svg',
    desc: 'Extraordinarily caring, social and popular people, always eager to help.',
  },
  {
    personality: 'Debater',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Debater-1-Nobody.svg',
    desc: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
  },
  {
    personality: 'Debater',
    level: '2',
    fame: 'Adam Savage',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Debater-2-Adam%20Savage.svg',
    desc: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
  },
  {
    personality: 'Debater',
    level: '2',
    fame: 'Sarah Silverman',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Debater-2-Sarah%20Silverman.svg',
    desc: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
  },
  {
    personality: 'Debater',
    level: '3',
    fame: 'Mark Twain',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Debater-3-Mark%20Twain.svg',
    desc: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
  },
  {
    personality: 'Debater',
    level: '3',
    fame: 'Thomas Edison',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Debater-3-Thomas%20Edison.svg',
    desc: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
  },
  {
    personality: 'Defender',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Defender-1-Nobody.svg',
    desc: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
  },
  {
    personality: 'Defender',
    level: '2',
    fame: 'Lance Reddick',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Defender-2-Lance%20Reddick.svg',
    desc: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
  },
  {
    personality: 'Defender',
    level: '2',
    fame: 'Vin Diesel',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Defender-2-Vin%20Diesel.svg',
    desc: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
  },
  {
    personality: 'Defender',
    level: '3',
    fame: 'Anne Hathaway',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Defender-3-Anne%20Hathaway.svg',
    desc: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
  },
  {
    personality: 'Defender',
    level: '3',
    fame: 'Kate Middleton',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Defender-3-Kate%20Middleton.svg',
    desc: 'Very dedicated and warm protectors, always ready to defend their loved ones.',
  },
  {
    personality: 'Entertainer',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entertainer-1-Nobody.svg',
    desc: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
  },
  {
    personality: 'Entertainer',
    level: '2',
    fame: 'Adele',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entertainer-2-Adele.svg',
    desc: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
  },
  {
    personality: 'Entertainer',
    level: '2',
    fame: 'Jamie Foxx',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entertainer-2-Jamie%20Foxx.svg',
    desc: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
  },
  {
    personality: 'Entertainer',
    level: '3',
    fame: 'Elton John',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entertainer-3-Elton%20John.svg',
    desc: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
  },
  {
    personality: 'Entertainer',
    level: '3',
    fame: 'Marilyn Monroe',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entertainer-3-Marilyn%20Monroe.svg',
    desc: 'Spontaneous, energetic and enthusiastic people - life is never boring around them.',
  },
  {
    personality: 'Entrepreneur',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entrepreneur-1-Nobody.svg',
    desc: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
  },
  {
    personality: 'Entrepreneur',
    level: '2',
    fame: 'Jack Nicholson',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entrepreneur-2-Jack%20Nicholson.svg',
    desc: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
  },
  {
    personality: 'Entrepreneur',
    level: '2',
    fame: 'Madonna',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entrepreneur-2-Madonna.svg',
    desc: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
  },
  {
    personality: 'Entrepreneur',
    level: '3',
    fame: 'Bruce Willis',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entrepreneur-3-Bruce%20Willis.svg',
    desc: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
  },
  {
    personality: 'Entrepreneur',
    level: '3',
    fame: 'Eddie Murphy',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Entrepreneur-3-Eddie%20Murphy.svg',
    desc: 'Smart, energetic and very perceptive people, who truly enjoy living on the edge.',
  },
  {
    personality: 'Executive',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Executive-1-Nobody.svg',
    desc: 'Excellent administrators, unsurpassed at managing things - or people.',
  },
  {
    personality: 'Executive',
    level: '2',
    fame: 'Judge Judy',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Executive-2-Judge%20Judy.svg',
    desc: 'Excellent administrators, unsurpassed at managing things - or people.',
  },
  {
    personality: 'Executive',
    level: '2',
    fame: 'Rank Sinatra',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Executive-2-Rank%20Sinatra.svg',
    desc: 'Excellent administrators, unsurpassed at managing things - or people.',
  },
  {
    personality: 'Executive',
    level: '3',
    fame: 'James Monroe',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Executive-3-James%20Monroe.svg',
    desc: 'Excellent administrators, unsurpassed at managing things - or people.',
  },
  {
    personality: 'Executive',
    level: '3',
    fame: 'Sonia Sotomayor',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Executive-3-Sonia%20Sotomayor.svg',
    desc: 'Excellent administrators, unsurpassed at managing things - or people.',
  },
  {
    personality: 'Logician',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logician-1-Nobody.svg',
    desc: 'Innovative inventors with an unquenchable thirst for knowledge.',
  },
  {
    personality: 'Logician',
    level: '2',
    fame: 'Avicii',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logician-2-Avicii.svg',
    desc: 'Innovative inventors with an unquenchable thirst for knowledge.',
  },
  {
    personality: 'Logician',
    level: '2',
    fame: 'Kristen Stewart',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logician-2-Kristen%20Stewart.svg',
    desc: 'Innovative inventors with an unquenchable thirst for knowledge.',
  },
  {
    personality: 'Logician',
    level: '3',
    fame: 'Albert Einstein',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logician-3-Albert%20Einstein.svg',
    desc: 'Innovative inventors with an unquenchable thirst for knowledge.',
  },
  {
    personality: 'Logician',
    level: '3',
    fame: 'Bill Gates',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logician-3-Bill%20Gates.svg',
    desc: 'Innovative inventors with an unquenchable thirst for knowledge.',
  },
  {
    personality: 'Logistician',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logistician-1-Nobody.svg',
    desc: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
  },
  {
    personality: 'Logistician',
    level: '2',
    fame: 'Natalie Portman',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logistician-2-Natalie%20Portman.svg',
    desc: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
  },
  {
    personality: 'Logistician',
    level: '2',
    fame: 'Sting',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logistician-2-Sting.svg',
    desc: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
  },
  {
    personality: 'Logistician',
    level: '3',
    fame: 'Angela Merkel',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logistician-3-Angela%20Merkel.svg',
    desc: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
  },
  {
    personality: 'Logistician',
    level: '3',
    fame: 'George Washington',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Logistician-3-George%20Washington.svg',
    desc: 'Practical and fact-minded individuals, whose reliability cannot be doubted.',
  },
  {
    personality: 'Mediator',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Mediator-1-Nobody.svg',
    desc: 'Poetic, kind and altruistic people, always eager to help a good cause.',
  },
  {
    personality: 'Mediator',
    level: '2',
    fame: 'Alicia Keys',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Mediator-2-Alicia%20Keys.svg',
    desc: 'Poetic, kind and altruistic people, always eager to help a good cause.',
  },
  {
    personality: 'Mediator',
    level: '2',
    fame: 'Tom Hiddleston',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Mediator-2-Tom%20Hiddleston.svg',
    desc: 'Poetic, kind and altruistic people, always eager to help a good cause.',
  },
  {
    personality: 'Mediator',
    level: '3',
    fame: 'Julia Roberts',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Mediator-3-Julia%20Roberts.svg',
    desc: 'Poetic, kind and altruistic people, always eager to help a good cause.',
  },
  {
    personality: 'Mediator',
    level: '3',
    fame: 'William Wordsworth',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Mediator-3-William%20Wordsworth.svg',
    desc: 'Poetic, kind and altruistic people, always eager to help a good cause.',
  },
  {
    personality: 'Protagonist',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Protagonist-1-Nobody.svg',
    desc: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
  },
  {
    personality: 'Protagonist',
    level: '2',
    fame: 'Ben Affleck',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Protagonist-2-Ben%20Affleck.svg',
    desc: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
  },
  {
    personality: 'Protagonist',
    level: '2',
    fame: 'Jennifer Lawrence',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Protagonist-2-Jennifer%20Lawrence.svg',
    desc: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
  },
  {
    personality: 'Protagonist',
    level: '3',
    fame: 'Barack Obama',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Protagonist-3-Barack%20Obama.svg',
    desc: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
  },
  {
    personality: 'Protagonist',
    level: '3',
    fame: 'Oprah Winfrey',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Protagonist-3-Oprah%20Winfrey.svg',
    desc: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
  },
  {
    personality: 'Virtuoso',
    level: '1',
    fame: 'Nobody',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Virtuoso-1-Nobody.svg',
    desc: 'Bold and practical experimenters, masters of all kinds of tools.',
  },
  {
    personality: 'Virtuoso',
    level: '2',
    fame: 'Daniel Craig',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Virtuoso-2-Daniel%20Craig.svg',
    desc: 'Bold and practical experimenters, masters of all kinds of tools.',
  },
  {
    personality: 'Virtuoso',
    level: '2',
    fame: 'MillaJovovich',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Virtuoso-2-MillaJovovich.svg',
    desc: 'Bold and practical experimenters, masters of all kinds of tools.',
  },
  {
    personality: 'Virtuoso',
    level: '3',
    fame: 'Michael Jordan',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Virtuoso-3-Michael%20Jordan.svg',
    desc: 'Bold and practical experimenters, masters of all kinds of tools.',
  },
  {
    personality: 'Virtuoso',
    level: '3',
    fame: 'Olivia Wilde',
    url: 'https://ipfs.io/ipfs/bafybeiekxx6cmiwkiajqjzu6o26dni4m7cpnjf66pdsuskzbpiaxagebvi/Virtuoso-3-Olivia%20Wilde.svg',
    desc: 'Bold and practical experimenters, masters of all kinds of tools.',
  },
]
