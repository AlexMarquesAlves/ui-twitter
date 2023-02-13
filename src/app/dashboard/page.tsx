export type DashboardProps = {
  title?: string
}

const Dashboard = ({ title }: DashboardProps) => {
  return (
    <>
      <h1>Oi</h1>
      <p>{title}</p>
    </>
  )
}

export default Dashboard
