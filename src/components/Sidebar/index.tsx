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
  Pencil,
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
              <House weight="fill" />
              <span>Home</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <Hash />
              <span>Explorer</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <Bell />
              <span>Notification</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <Envelope />
              <span>Messages</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <BookmarkSimple />
              <span>Bookmarks</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <FileText />
              <span>Lists</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <User />
              <span>Profile</span>
            </a>
          </Link>
          <Link href={`/`}>
            <a>
              <DotsThreeCircle />
              <span>More</span>
            </a>
          </Link>
        </Styled.MainNavigation>

        <Styled.NewTweet>
          <Pencil />
          <span>Tweet</span>
        </Styled.NewTweet>
      </Styled.Sidebar>
    </>
  )
}
