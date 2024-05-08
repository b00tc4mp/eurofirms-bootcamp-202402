import { useState, useEffect } from 'react'
import { errors } from 'com'

import logic from '../logic'

const { ContentError, MatchError } = errors

function Home({ onUserLoggedOut }) {
    const [view, setView] = useState(null)
    const [user, setUser] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error.message)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify user`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
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

    return <div className="flex flex-col height-full   ">
        
        <header className="flex justify-between items-center border-b-2 border-black  fixed top-0 w-full bg-white h-12 px-2 box-border">
            {!user && <p>Loading...</p>}
            {user && <h1>Hello, {user.name}!</h1>}

            <nav>
                <button className="px-3" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>

        </header>

       
        <footer className="flex justify-center items-center border-t-2 border-black fixed bottom-0 w-full bg-white h-12 px-2 box-border align-end">
            <button className="px-3 ">🏚️</button>
            
        </footer>
        
    </div>
}

export default Home