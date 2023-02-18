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
    /*  */
  `}
`

export const TweetContentHeader = styled.div`
  ${({ theme }) => css`
    /*  */
  `}
`

export const TweetContentFooter = styled.div`
  ${({ theme }) => css`
     /*  */
     }
  `}
`
