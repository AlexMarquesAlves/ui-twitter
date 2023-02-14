import { Repo } from '../Repo'

export const User = async () => {
  const response = await fetch(
    'https://api.github.com/users/alexmarquesalves',
    {
      // next: {
      //   revalidate: 30,
      // },
      cache: 'no-store',
    },
  )
  const user = await response.json()

  return (
    <>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      {/* @ts-expect-error Async Server Component */}
      <Repo />
    </>
  )
}
