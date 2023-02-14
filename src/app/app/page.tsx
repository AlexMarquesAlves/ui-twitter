import { Repo } from '@/components/Repo'
import Link from 'next/link'
import { Suspense } from 'react'

export type DashboardProps = {
  title?: string
}

const Dashboard = ({ title }: DashboardProps) => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>{title}</p>
      <Link href={'/'}>Home</Link>

      <Suspense fallback={<p>Carregando repositórios...</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>
    </>
  )
}

export default Dashboard
