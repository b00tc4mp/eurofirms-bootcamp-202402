import { useState, useEffect } from 'react'
import { errors } from 'com'
import logic from '../logic'
import CalendarApp from './Calendar.jsx'
//import Gallery from './Gallery.jsx'

const { ContentError, MatchError } = errors

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError)
                        feedback = `${feedback}, please correct it`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }, [])

    const handleLogout = () => {
        logic.logoutUser()
        onUserLoggedOut()
    }

    console.log('Home render')

    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex justify-between items-center border-b-2 border-white bg-black text-white p-4">
                {!user && <p>Loading...</p>}
                {user && <h1 className="text-lg font-bold">Hello, {user.name}!</h1>}
                <nav>
                    <button className="px-4 text-white" id="logout-button" onClick={handleLogout}>login</button>
                </nav>
            </header>


            <div className="flex flex-row justify-center items-center">
             
                <div className="max-w-screen-lg w-full px-4 flex-grow-1">
                   <CalendarApp />
                </div>
            </div>


            <footer className="flex justify-center items-center border-t-2 border-white bg-black text-white p-3">
                <button className="px-3 text-white">🏚️</button>
            </footer>
        </div>
    )
}

export default Home
