/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Separator } from 'components/Separator'
import { Tweet } from 'components/Tweet'
import { FormEvent, KeyboardEvent, useState } from 'react'
import * as Styled from './styles'

export type TimelineProps = {
  children?: React.ReactNode | string
}

const Timeline = (props: TimelineProps) => {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Sonha e serás livre de espírito... luta e serás livre na vida.',
    'O futuro pertence àqueles que acreditam na beleza de seus sonhos.',
    'A arte é a autoexpressão lutando para ser absoluta.',
  ])

  function handleCreateNewTweet(event: FormEvent) {
    event.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
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
          <textarea
            id="tweet"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
            placeholder="What's happening?"
          />
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
