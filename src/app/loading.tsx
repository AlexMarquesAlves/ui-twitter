export type LoadingProps = {
  title?: string
}

const Loading = ({ title = 'CARREGANDO' }: LoadingProps) => {
  return (
    <>
      <p>{title}</p>
    </>
  )
}
export default Loading
