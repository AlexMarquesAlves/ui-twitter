import { Sidebar } from 'components/Sidebar'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Content, Layout } from 'templates/App/styles'
import { GlobalStyles } from '../styles/global-styles'
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Sidebar />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
