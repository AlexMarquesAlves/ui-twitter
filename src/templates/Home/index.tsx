/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Sidebar } from 'components/Sidebar'
import { Tweet } from 'components/Tweet'
import Head from 'next/head'
import { Content, Layout, NewTweetForm, Separator, TimeLine } from './styles'

function Home() {
  return (
    <>
      <Head>
        <title>Bird blue UI</title>
      </Head>

      <Layout>
        <Sidebar />

        <Content>
          <TimeLine>

            <Header title={'Home'} />

            <NewTweetForm>
              <label htmlFor="tweet">
                <img src="https://github.com/alexmarquesalves.png" alt="¡Duque profile picture" />
                <textarea placeholder="What's happening?" id="tweet" />
              </label>

              <button type="submit">Tweet</button>
            </NewTweetForm>

            <Separator />

            <Tweet user={'¡Duque'} >este é um tweet</Tweet>
            <Tweet user={'¡Duque'} >este é um tweet</Tweet>
            <Tweet user={'¡Duque'} >este é um tweet</Tweet>
            <Tweet user={'¡Duque'} >este é um tweet</Tweet>
          </TimeLine>
        </Content>
      </Layout>
    </>
  )
}

export default Home
