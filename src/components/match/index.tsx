import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import { LogoIcon } from '../logo'

const db = [
  {
    name: 'Emma',
    url: './images/tinder/Emma.webp',
  },
  {
    name: 'Ethan',
    url: './images/tinder/Ethan.webp',
  },
  {
    name: 'James',
    url: './images/tinder/James.webp',
  },
  {
    name: 'Liam',
    url: './images/tinder/Liam.webp',
  },
  {
    name: 'Olivia',
    url: './images/tinder/Olivia.webp',
  },
  {
    name: 'Sophia',
    url: './images/tinder/Sophia.webp',
  },
]

export function Match() {
  const [characters, setCharacters] = useState<Array<{ name: string; url: string }>>([])

  useEffect(() => {
    setCharacters(db)
  }, [])

  return (
    <div className="flex flex-col items-center h-full justify-center space-y-6 pt-[48px] pb-[65px] relative">
      <header className="h-[48px] absolute w-full left-0 top-0 px-6 py-4">
        <LogoIcon className="w-[48px] h-[48px]" />
      </header>
      <div className="w-[90vw] max-w-[260px] h-[300px] py-8">
        {characters.map((character) => (
          <TinderCard className="absolute" key={character.name}>
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className="relative bg-white w-[80vw] max-w-[260px] h-[300px] rounded-lg shadow-[0px_0px_60px_0px_rgba(0,0,0,0.30)] bg-cover bg-center"
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}
