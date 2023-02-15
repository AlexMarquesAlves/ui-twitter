import * as Styled from './styles'

export type MockProps = {
  children: React.ReactNode | string
}

export const Mock = (props: MockProps) => {
  return <Styled.Title>{props.children}</Styled.Title>
}
