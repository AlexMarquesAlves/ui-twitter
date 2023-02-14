'use client'

import { useState } from 'react'

export const User = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </>
  )
}
