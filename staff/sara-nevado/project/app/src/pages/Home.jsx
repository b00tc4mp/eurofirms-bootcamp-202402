import { useState, useEffect } from 'react'
import { errors } from 'com'
import logic from '../logic'

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
        <>
            <header className="flex justify-between items-center border-b-2 border-white fixed top-0 w-full bg-black h-13 px-4 text-white">
                {!user && <p>Loading...</p>}
                {user && <h1 className="text-lg font-bold">Hello, {user.name}!</h1>}
                <nav>
                    <button className="px-4 text-white" id="logout-button" onClick={handleLogout}>login</button>
                </nav>
            </header>

            <footer className="flex justify-center items-center border-t-2 border-white fixed bottom-0 w-full bg-black h-13 px-3 text-white">
                <button className="px-4 text-white">posible boton</button>
            </footer>
        </>
    )
}

export default Home
