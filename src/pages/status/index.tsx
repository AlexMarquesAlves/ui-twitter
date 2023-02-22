/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Separator } from 'components/Separator'
import { Tweet } from 'components/Tweet'
import * as Styled from './styles'

const answers = ['Concordo...', 'Olha, faz sentido!', 'Bem Profundo...']

export type StatusProps = {
  title?: string
}

const Status = ({ title }: StatusProps) => {
  return (
    <Styled.Wrapper>
      <Header title={'Tweet'} />

      <Tweet
        content={
          'Sonha e serás livre de espírito... luta e serás livre na vida.'
        }
      />

      <Separator />

      <Styled.AnswerTweetForm>
        <label htmlFor="tweet">
          <img
            src="https://github.com/alexmarquesalves.png"
            alt="¡Duque profile picture"
          />
          <textarea placeholder="Tweet your answer" id="tweet" />
        </label>

        <button type="submit">Answer</button>
      </Styled.AnswerTweetForm>

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}
    </Styled.Wrapper>
  )
}
export default Status
