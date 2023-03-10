import styled, { css } from 'styled-components'

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

    @media (max-width: 780px) {
     padding: 2.4rem 1.2rem;
     align-items: center;
    }
  `}
`

export const MainNavigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    a {
      display: flex;
      align-items: center;
      gap: 2rem;
      font-size: 2rem;
      text-decoration: none;
      color: ${theme.colors.bgColor};

      &.active {
        color: ${theme.colors.tweeterBlue};
      }

      svg {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    @media (max-width: 780px) {
     a {
      span {
        display: none;
      }
     }
    }
  `}
`

export const NewTweet = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.tweeterBlue};
    border-radius: 999.9rem;
    padding: 1.6rem;
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${theme.colors.white};
    font-size: 2rem;
    font-weight: 900;
    border: 0;
    transition: all 300ms ease;

    &:hover {
      filter: brightness(.9);
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      display: none;
    }

    @media (max-width: 780px) {
      span {
        display: none;
      }
      svg {
        display: block;
      }
    }
  `}
`
