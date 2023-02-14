import { User } from '@/components/User'

export default async function Home() {
  // eslint-disable-next-line no-unused-vars
  // const [res1, res2] = await Promise.all([fetch(''), fetch('')])

  return (
    <>
      <h1>Home</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />
    </>
  )
}
