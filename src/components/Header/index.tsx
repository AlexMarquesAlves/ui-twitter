import * as Styled from './styles'

export type HeaderProps = {
  children?: React.ReactNode | string
}

export const Header = (props: HeaderProps) => {
  return <Styled.Title>{props.children}</Styled.Title>
}
