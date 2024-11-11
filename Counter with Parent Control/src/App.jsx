import { useState } from 'react'
import CounterParent from './components/CounterParent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <CounterParent/>
      
    </>
  )
}

export default App
