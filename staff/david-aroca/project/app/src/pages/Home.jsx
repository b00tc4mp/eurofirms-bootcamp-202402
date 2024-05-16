import { useState, useEffect } from "react"
import { errors } from "com"
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from "../logic"

// importacion de el componente 
import Measures from "../components/Measures"
import Exercises from "../components/Exercises"
import Diets from "../components/Diets"
// import search from "../components/Search"

const { ContentError, MatchError } = errors

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it `

                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify user`
                    else
                        feedback = 'sorry,there was an error please try again later'
                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry,there was an error,please try again later'
            alert(feedback)
        }

    }, [])

    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

    const handleMeasureNavigate = () => {
        navigate('/measurements')
    }

    const handleHomeNavigate = () => {
        navigate('/')

    }

    const handleDietNavigate = () => {
        navigate('/diets')

    }

    const handleRoutineNavigate = () => {
        navigate('/routines')

    }

    console.log('HOME RENDER 💀')

    return <>
        {/* header */}
        <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-gray-200 px-6 py-4">
            {user ? <h1 className="text-gray-800 text-xl font-bold">Hello, {user.name}</h1> : <p className="text-gray-800">Loading...</p>}

            <nav>
                <button className="bg-gray-800 text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleLogout}>Exit</button>
            </nav>
        </header>

        <Routes>
            <Route path="/measurements" element={<Measures />} />
            <Route path="/diets" element={<Diets />} />
            <Route path="/routines" element={<Exercises />} />
            {/* <Route path="/" element={<HomeContent />} /> */}
            {/* no puedo tener contenido en home sin rutas a excepcion del footer y el header */}
            {/* <TODO></TODO> */}
        </Routes>

        {/* TODO */}
        {/* Hay que solucionar el hecho de que se ve en todas las
         vistas cuando solo se tiene que ver en el home */}

        {/* footer con sus respectivos botones comentados porque si no da error */}
        <footer className="flex justify-between items-center border-t-2 border-black fixed bottom-0 w-full bg-gray-200 px-6 py-4">
            <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                onClick={handleMeasureNavigate}
            >Measures</button>
            <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                onClick={handleHomeNavigate}
            >Home</button>
            <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                onClick={handleDietNavigate}
            >Diets</button>
            <button className="text-gray-800 font-semibold hover:underline focus:outline-none focus:shadow-outline"
                onClick={handleRoutineNavigate}
            >Routines</button>
        </footer>
    </>

}

export default Home