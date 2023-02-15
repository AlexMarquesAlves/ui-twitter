import styled, { css } from 'styled-components'

export const Layout = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: 100rem;

    display: grid;
    grid-template-columns: 30rem 1fr;
  `}
`

export const Sidebar = styled.aside`
  ${({ theme }) => css`
    padding: 2.4rem 2rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > img {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`
