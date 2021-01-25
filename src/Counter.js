import {useState} from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Counter</h2>
      <button onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </>
  )
}
