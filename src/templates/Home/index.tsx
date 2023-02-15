/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Content, Layout, Sidebar } from './styles'

function Home() {
  return (
    <>
      <Head>
        <title>Bird blue UI</title>
      </Head>

      <Layout>
        <Sidebar>
          <img src={'/assets/Logo.svg'} alt="logo" />

          <nav></nav>
        </Sidebar>
        <Content>Content</Content>
      </Layout>
    </>
  )
}

export default Home
