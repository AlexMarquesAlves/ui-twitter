import { Repo } from '@/components/Repo'
import { User } from '@/components/User'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'

export default async function Home() {
  // eslint-disable-next-line no-unused-vars
  // const [res1, res2] = await Promise.all([fetch(''), fetch('')])

  const router = useRouter()

  router.refresh()

  return (
    <>
      <h1>Home</h1>

      <Link href={'/app'}>Dashboard</Link>

      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>

      <Suspense fallback={<p>Carregando usuário...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <User />
      </Suspense>
    </>
  )
}
