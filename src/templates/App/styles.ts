import styled, { css } from 'styled-components'

export const Layout = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 100rem;

    display: grid;
    grid-template-columns: 30rem 1fr;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border-inline: 0.1rem solid ${theme.colors.mediumGray};
  `}
`
