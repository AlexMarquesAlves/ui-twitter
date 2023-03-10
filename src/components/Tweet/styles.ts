import styled, { css } from 'styled-components'

export const Wrapper = styled.a`
  ${({ theme }) => css`
    padding: 2.4rem 2rem;
    display: grid;
    grid-template-columns: 4.8rem 1fr;
    gap: 1.2rem;
    border-bottom: #ebeef0;
    text-decoration: none;

    img {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 999.9rem;
    }
  `}
`

export const TweetContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    p {
      line-height: 2rem;
    }
  `}
`

export const TweetContentHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    span {
      font-size: 1.4rem;
      color: ${theme.colors.textColor};
    }
  `}
`

export const TweetContentFooter = styled.div`
  ${({ theme }) => css`
     display: flex;
     align-items: center;
     gap: 4.8rem;
     margin-top: 1.2rem;

     button {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      background: transparent;
      border: 0;
      font-size: 1.4rem;
      color: ${theme.colors.textColor};

      &:hover {
        color: ${theme.colors.tweeterBlue};
      }

      svg {
        width: 2rem;
        height: 2rem;
      }
     }
  `}
`
