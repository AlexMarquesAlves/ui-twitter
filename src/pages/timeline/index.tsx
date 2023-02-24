/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Separator } from 'components/Separator'
import { Tweet } from 'components/Tweet'
import * as Styled from './styles'

const tweets = [
  'Sonha e serás livre de espírito... luta e serás livre na vida.',
  'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
  'A arte é a autoexpressão lutando para ser absoluta.',
]

export type TimelineProps = {
  children?: React.ReactNode | string
}

const Timeline = (props: TimelineProps) => {
  function handleCreateNewTweet(event) {
    event.preventDefault()
  }

  return (
    <Styled.Wrapper>
      <Header title={'Home'} />

      <Styled.NewTweetForm onSubmit={handleCreateNewTweet}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/alexmarquesalves.png"
            alt="¡Duque profile picture"
          />
          <textarea placeholder="What's happening?" id="tweet" />
        </label>

        <button type="submit">Tweet</button>
      </Styled.NewTweetForm>

      <Separator />

      {tweets.map((tweet) => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </Styled.Wrapper>
  )
}

export default Timeline
