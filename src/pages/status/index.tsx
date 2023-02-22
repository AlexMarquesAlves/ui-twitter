import * as Styled from './styles'

export type StatusProps = {
  title?: string
}

const Status = ({ title }: StatusProps) => {
  return (
    <Styled.Wrapper>
      <h1>Tweet</h1>
    </Styled.Wrapper>
  )
}
export default Status
