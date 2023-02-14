import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Hello, Next 13!</h1>
      <Link href={'/dashboard'}>Dashboard</Link>
    </>
  )
}
