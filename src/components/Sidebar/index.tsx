/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User
} from 'phosphor-react'
import * as Styled from './styles'

export type SidebarProps = {
  children?: React.ReactNode | string
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <Styled.Sidebar>
        <img src={'/assets/Logo.svg'} alt="logo" />

        <Styled.MainNavigation>
          <Link href={`/`}>
            <a className="active">
              <House weight="fill" /> Home
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <Hash /> Explorer
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <Bell /> Notification
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <Envelope /> Messages
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <BookmarkSimple /> Bookmarks
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <FileText /> Lists
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <User /> Profile
            </a>
          </Link>
          <Link href={`/`}>
            <a >
              <DotsThreeCircle /> More
            </a>
          </Link>
        </Styled.MainNavigation>

        <Styled.NewTweet>Tweet</Styled.NewTweet>
      </Styled.Sidebar>
    </>
  )
}
