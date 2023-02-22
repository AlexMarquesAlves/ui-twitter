/* eslint-disable @next/next/no-img-element */
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import {
  TweetContent,
  TweetContentFooter,
  TweetContentHeader,
  Wrapper
} from './styles'

export type TweetProps = {
  content: React.ReactNode | string
}

export const Tweet = (props: TweetProps) => {
  return (
    <Wrapper>
      <img
        src="https://github.com/alexmarquesalves.png"
        alt="¡Duque profile picture"
      />

      <TweetContent>
        <TweetContentHeader>
          <strong>¡Duque de Terno</strong>
          <span>@dev_duque</span>
        </TweetContentHeader>

        <p>
          {props.content}
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
