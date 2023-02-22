import styled, { css } from 'styled-components'

export const TimeLineHeader = styled.div`
  ${({ theme }) => css`
   padding: 2.4rem 2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 2rem;
   font-weight: 700;
   border-bottom: 0.1rem solid ${theme.colors.mediumGray};

   svg {
    width: 2.4rem;
    height: 2.4rem;
    color: ${theme.colors.tweeterBlue};
   }
  `}
`
