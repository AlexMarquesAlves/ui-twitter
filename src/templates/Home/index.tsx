import Head from 'next/head'
import { Content, Layout, Sidebar } from './styles'

function Home() {
  return (
    <>
      <Head>
        <title>Bird blue UI</title>
      </Head>

      <Layout>
        <Sidebar>Sidebar</Sidebar>
        <Content>Content</Content>
      </Layout>
    </>
  )
}

export default Home
