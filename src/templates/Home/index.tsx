/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import {
  Bell,
  BookmarkSimple, Envelope,
  FileText,
  Hash,
  House,
  User
} from 'phosphor-react'
import { Content, Layout, MainNavigation, NewTweet, Sidebar } from './styles'

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
              More
            </a>
          </MainNavigation>

          <NewTweet>Tweet</NewTweet>
        </Sidebar>
        <Content>Content</Content>
      </Layout>
    </>
  )
}

export default Home
