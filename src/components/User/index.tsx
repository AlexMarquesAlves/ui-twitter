export const User = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    // next: {
    //   revalidate: 30,
    // },
    cache: 'no-store',
  })
  const repos = await response.json()

  return (
    <>
      <h1>User</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </>
  )
}
