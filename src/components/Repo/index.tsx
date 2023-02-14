export const Repo = async () => {
  const response = await fetch(
    'https://api.github.com/users/alexmarquesalves/repos',
    {
      // next: {
      //   revalidate: 30,
      // },
      cache: 'no-store',
    },
  )
  const repos = await response.json()

  return (
    <>
      <h1>Repos</h1>
      <pre>{JSON.stringify(repos, null, 2)}</pre>
    </>
  )
}
