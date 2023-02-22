/* eslint-disable @next/next/no-img-element */
import { Header } from 'components/Header'
import { Separator } from 'components/Separator'
import { Sidebar } from 'components/Sidebar'
import { Tweet } from 'components/Tweet'
import Head from 'next/head'
import { Content, Layout, NewTweetForm, TimeLine } from './styles'

const tweets = [
  "Sonha e serás livre de espírito... luta e serás livre na vida.",
  "O futuro pertence àqueles que acreditam na beleza de seus sonhos.",
  "A arte é a autoexpressão lutando para ser absoluta.",

]

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


            {tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
            })}
          </TimeLine>
        </Content>
      </Layout>
    </>
  )
}

export default Home
