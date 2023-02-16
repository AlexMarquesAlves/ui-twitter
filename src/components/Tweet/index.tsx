export type TweetProps = {
  user: string
  children: React.ReactNode | string
  likes?: number
}

export const Tweet = (props: TweetProps) => {
  return (
    <div>
      <strong>{props.user}</strong>
      <p>{props.children}</p>
      <button>Like {props.likes ?? 0}</button>
    </div>
  )
}
