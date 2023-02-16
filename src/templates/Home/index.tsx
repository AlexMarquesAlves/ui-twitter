/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import {
  Hash,
  House
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
              Notification
            </a>
            <a href="">
              Messages
            </a>
            <a href="">
              Bookmarks
            </a>
            <a href="">
              Lists
            </a>
            <a href="">
              Profile
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
