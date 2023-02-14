import Link from 'next/link'

export type DashboardProps = {
  title?: string
}

const Dashboard = ({ title }: DashboardProps) => {
  return (
    <>
      <h1>Dashboard</h1>
      <p>{title}</p>
      <Link href={'/'}>Home</Link>
    </>
  )
}

export default Dashboard
