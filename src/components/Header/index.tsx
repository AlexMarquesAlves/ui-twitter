import { Sparkle } from 'phosphor-react'
import * as Styled from './styles'

export type HeaderProps = {
  children?: React.ReactNode | string
}

export const Header = (props: HeaderProps) => {
  return <Styled.TimeLineHeader>Home <Sparkle /></Styled.TimeLineHeader>

}
