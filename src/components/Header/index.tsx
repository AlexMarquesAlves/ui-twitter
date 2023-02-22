import { Sparkle } from 'phosphor-react'
import * as Styled from './styles'

export type HeaderProps = {
  title: string
}

export const Header = (props: HeaderProps) => {
  return <Styled.TimeLineHeader>{props.title} <Sparkle /></Styled.TimeLineHeader>

}
