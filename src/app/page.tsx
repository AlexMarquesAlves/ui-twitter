import { User } from '@/components/User'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />
    </>
  )
}
