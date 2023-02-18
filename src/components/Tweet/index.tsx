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
