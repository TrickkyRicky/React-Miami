import { useState } from 'react'

import './App.css'

const COUNTER_NAME = "name"
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div>Counter is {count}</div>
   <button onClick={()}>
    Increment Counter
   </button>
   </>
  )
}

export default App
