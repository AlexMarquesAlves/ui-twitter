import { User } from '@/components/User'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Home() {
  // eslint-disable-next-line no-unused-vars
  // const [res1, res2] = await Promise.all([fetch(''), fetch('')])

  return (
    <>
      <h1>Home</h1>

      <Link href={'/app'}>Dashboard</Link>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </>
  )
}
