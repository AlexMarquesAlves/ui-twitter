import { Repo } from '@/components/Repo'
import { User } from '@/components/User'
import { useRouter } from 'next/navigation'
import { Suspense } from 'react'

export default async function Home() {
  // eslint-disable-next-line no-unused-vars
  // const [res1, res2] = await Promise.all([fetch(''), fetch('')])
  const route = useRouter()

  // eslint-disable-next-line no-unused-vars
  function submit() {
    route.push('/')
  }

  return (
    <>
      <h1>Home</h1>
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
