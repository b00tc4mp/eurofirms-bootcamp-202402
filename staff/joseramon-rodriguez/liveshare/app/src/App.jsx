import { useState } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login></Login>
      {/* <Register></Register> */}
      {/* <Home></Home> */}
    </>
  )
}

export default App
