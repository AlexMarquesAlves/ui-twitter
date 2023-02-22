import * as Styled from './styles'

export type SeparatorProps = {
  children: React.ReactNode | string
}

export const Separator = (props: SeparatorProps) => {
  return <Styled.Title>{props.children}</Styled.Title>
}
