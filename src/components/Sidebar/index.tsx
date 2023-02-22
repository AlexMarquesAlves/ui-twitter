/* eslint-disable @next/next/no-img-element */
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, User } from 'phosphor-react'
import * as Styled from './styles'

export type SidebarProps = {
  children?: React.ReactNode | string
}

export const Sidebar = (props: SidebarProps) => {
  return <>
    <Styled.Sidebar>
      <img src={'/assets/Logo.svg'} alt="logo" />

      <Styled.MainNavigation>
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
      </Styled.MainNavigation>

      <Styled.NewTweet>Tweet</Styled.NewTweet>
    </Styled.Sidebar>
  </>
}
