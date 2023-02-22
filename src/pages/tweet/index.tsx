import * as Styled from './styles'

export type TweetPageProps = {
  title?: string
}

const TweetPage = ({ title }: TweetPageProps) => {
  return (
    <Styled.Wrapper>
      <h1>Tweet</h1>
    </Styled.Wrapper>
  )
}
export default TweetPage
