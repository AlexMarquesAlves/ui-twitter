import { ReactNode } from 'react'

export type AuthLayoutProps = {
  children: ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <h1>Auth</h1>
      {children}
    </>
  )
}

export default AuthLayout
