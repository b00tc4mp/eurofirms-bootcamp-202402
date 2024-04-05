import {useState} from 'react'
import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ResetPassword from './pages/ResetPassword'

function App() {
    const [count, setCount]= useState(0)
    return(<>
    <Home/>
    {/*<Login/>*/}
    {/*<Register/>*/}
    <ResetPassword/>
    </>
    )
}

export default App
