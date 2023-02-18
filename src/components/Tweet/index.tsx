/* eslint-disable @next/next/no-img-element */
import { TweetContent, TweetContentHeader, Wrapper } from './styles'

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



      </TweetContent>
    </Wrapper>
  )
}
