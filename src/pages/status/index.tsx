/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Separator } from 'components/Separator'
import { Tweet } from 'components/Tweet'
import { FormEvent, KeyboardEvent, useState } from 'react'
import * as Styled from './styles'
export type StatusProps = {
  title?: string
}

const Status = ({ title }: StatusProps) => {
  const [newAnswer, setNewAnswer] = useState('')
  const [answer, setAnswer] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Bem Profundo...',
  ])

  function handleCreateNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswer([newAnswer, ...answer])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswer([newAnswer, ...answer])
      setNewAnswer('')
    }
  }

  return (
    <Styled.Wrapper>
      <Header title={'Tweet'} />

      <Tweet
        content={
          'Sonha e serás livre de espírito... luta e serás livre na vida.'
        }
      />

      <Separator />

      <Styled.AnswerTweetForm onSubmit={handleCreateNewAnswer}>
        <label htmlFor="tweet">
          <img
            src="https://github.com/alexmarquesalves.png"
            alt="¡Duque profile picture"
          />
          <textarea
            id="tweet"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
            placeholder="Tweet your answer"
          />
        </label>

        <button type="submit">Answer</button>
      </Styled.AnswerTweetForm>

      {answer.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </Styled.Wrapper>
  )
}
export default Status
