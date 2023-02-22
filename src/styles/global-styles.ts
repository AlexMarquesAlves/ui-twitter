import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    line-height: 100%;
    /* background-color: ${({ theme }) => theme.colors.bgColor}; */
    /* color: ${({ theme }) => theme.colors.textColor}; */
  }

  body,
  input,
  textarea,
  button {
    font: 400 1.6rem "Lato", sans-serif;

  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Crimson Pro", serif;
    font-weight: 600;
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    /* color: ${({ theme }) => theme.colors.secondaryColor}; */
    cursor: pointer;
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`
