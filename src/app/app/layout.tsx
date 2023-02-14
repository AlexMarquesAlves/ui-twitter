import { ReactNode } from 'react'

export type AppLayoutProps = {
  children: ReactNode
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
