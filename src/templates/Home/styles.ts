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

export const TimeLine = styled.main`
  ${({ theme }) => css`
   /*  */
  `}
`

export const NewTweetForm = styled.form`
  ${({ theme }) => css`
   padding: 2.4rem 2rem;
   display: flex;
   flex-direction: column;
   gap: 0.8rem;

   label {
    display: flex;
    gap: 1.2rem;

    img {
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 999.9rem;
    }

    textarea {
      flex: 1;
      border: 0;
      font-size: 2rem;
      font-weight: 500;
      gap: 1.2rem;
      resize: none;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #5b7083;
      }
    }
  }

  button[type=submit] {
    margin-left: auto;
    background:  ${theme.colors.tweeterBlue};
    border-radius: 999.9rem;
    padding: 1.2rem 2.4rem;
    color: ${theme.colors.white};
    font-size: 1.6rem;
    font-weight: 900;
    border: 0;

    &:hover {
      filter: brightness(0.9);
    }
  }
  `}
`
