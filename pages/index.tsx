import Head from 'next/head'
import SpriteCommandGame from '../components/SpriteCommandGame'

export default function Home() {
  return (
    <>
      <Head>
        <title>Z3lda - Sprite Command Game</title>
        <meta name="description" content="An interactive sprite command game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SpriteCommandGame />
    </>
  )
} 