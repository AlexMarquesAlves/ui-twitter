/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Content, Layout, NewTweet, Sidebar } from './styles'

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

          <NewTweet>Tweet</NewTweet>
        </Sidebar>
        <Content>Content</Content>
      </Layout>
    </>
  )
}

export default Home
