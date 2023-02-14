import { cookies, headers } from 'next/headers'

export const User = async () => {
  const userCookies = cookies()
  const userHeaders = headers()

  return (
    <>
      <h1>User</h1>

      {JSON.stringify(userCookies.getAll(), null, 2)}
      {JSON.stringify(userHeaders.entries(), null, 2)}
    </>
  )
}
