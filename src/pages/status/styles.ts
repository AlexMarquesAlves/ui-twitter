import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
   /*  */
  `}
`

export const AnswerTweetForm = styled.form`
  ${({ theme }) => css`
   padding: 2.4rem 2rem;
   display: flex;
   align-items: center;
   gap: 0.8rem;
   border-bottom: 0.1rem solid #ebeef0;

   label {
    flex: 1;
    display: flex;
    align-items: center;
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
      margin-top: 2rem;
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
