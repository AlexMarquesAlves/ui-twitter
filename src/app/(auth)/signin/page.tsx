export type SignInProps = {
  title?: string
}

const SignIn = ({ title }: SignInProps) => {
  return (
    <>
      <h1>Login</h1>
      <p>{title}</p>
    </>
  )
}

export default SignIn
