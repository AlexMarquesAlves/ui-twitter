import { ReactNode } from 'react'

export type AppLayoutProps = {
  children: ReactNode
}

export const metadata = {
  title: {
    default: 'Rocketseat',
    template: '%s | Rocketseat',
  },
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <h1>App</h1>
      {children}
    </>
  )
}

export default AppLayout
