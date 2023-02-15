export type TweetProps = {
  user: string
  children: string
  likes?: number
}

export const Tweet = ({ user, children, likes }: TweetProps) => {
  return (
    <div className="tweet">
      <strong>{user}</strong>
      <p>{children}</p>
      <button>Like {likes ?? 0}</button>
    </div>
  )
}
