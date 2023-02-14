import Link from 'next/link'

export default async function Home() {
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
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Link href={'/dashboard'}>Dashboard</Link>
    </>
  )
}
