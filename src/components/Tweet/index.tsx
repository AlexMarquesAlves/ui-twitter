/* eslint-disable @next/next/no-img-element */
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { TweetContent, TweetContentFooter, TweetContentHeader, Wrapper } from './styles'

export type TweetProps = {
  user: string
  children: React.ReactNode | string
  likes?: number
}

export const Tweet = (props: TweetProps) => {
  return (
    <Wrapper>
      <img src="https://github.com/alexmarquesalves.png" alt="¡Duque profile picture" />

      <TweetContent>
        <TweetContentHeader>
          <strong>¡Duque de Terno</strong>
          <span>@dev_duque</span>
        </TweetContentHeader>


        <p>
          Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: <br />
          <br />
          ✅ npm start: De 32s para 400ms (sim, demorava 30s) <br />
          ✅ npm build: De 120s para 22s <br />
          <br />
          Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥 <br />
        </p>

        <TweetContentFooter>
          <button>
            <ChatCircle />
            20
          </button>

          <button>
            <ArrowsClockwise />
            20
          </button>

          <button>
            <Heart />
            20
          </button>
        </TweetContentFooter>
      </TweetContent>
    </Wrapper>
  )
}
