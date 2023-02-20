/* eslint-disable @next/next/no-img-element */
import { Tweet } from 'components/Tweet'
import Head from 'next/head'
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Sparkle,
  User
} from 'phosphor-react'
import { Content, Layout, MainNavigation, NewTweet, NewTweetForm, Separator, Sidebar, TimeLine, TimeLineHeader } from './styles'

function Home() {
  return (
    <>
      <Head>
        <title>Bird blue UI</title>
      </Head>

      <Layout>
        <Sidebar>
          <img src={'/assets/Logo.svg'} alt="logo" />

          <MainNavigation>
            <a href="" className="active">
              <House weight="fill" />
              Home
            </a>
            <a href="">
              <Hash /> Explorer
            </a>
            <a href="">
              <Bell /> Notification
            </a>
            <a href="">
              <Envelope /> Messages
            </a>
            <a href="">
              <BookmarkSimple /> Bookmarks
            </a>
            <a href="">
              <FileText /> Lists
            </a>
            <a href="">
              <User /> Profile
            </a>
            <a href="">
              <DotsThreeCircle /> More
            </a>
          </MainNavigation>

          <NewTweet>Tweet</NewTweet>
        </Sidebar>

        <Content>
          <TimeLine>
            <TimeLineHeader>Home <Sparkle /></TimeLineHeader>
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
