import { useState } from 'react'
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <body>
        <Sidebar />

      </body>
    
    </>
  )
}

export default App
