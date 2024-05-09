import { useEffect, useState } from 'react'
import { errors } from 'com'
import { Routes, Route, Navigate } from 'react-router-dom'

import Button from '../components/Button'
import logic from '../logic'
import Events from '../components/Events'
import Event from '../components/Event'

const { ContentError, MatchError } = errors

function Home({ onLogoutClick }) {
    const [error, setError] = useState(null)
    const [user, setUser] = useState(null)

    const handleLogoutClick = () => {
        logic.logoutUser()

        onLogoutClick()
    }

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please try with a registered user`
                    else
                        feedback = 'sorry there was an error, please try again later'

                    setError({ message: feedback, isError: true })
                })
        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry there was an error, please try again'

            setError({ message: feedback, isError: true })
        }
    }, [])
    return <>
        <header className='flex flex-row justify-end'>
            <Button>Your Bets</Button>
            <Button>Wallet ={user?.wallet}</Button>
            <Button onClick={handleLogoutClick}>LOG OUT</Button>
        </header>
        {user ? <h1>HELLO HOME {user.username}</h1> : <span>Loading...</span>}
        <main className='flex flex-col'>
            <Button>Search Events</Button>


            <Routes>
                <Route path='/events' element={<Events />} />
                <Route path='/events/:eventId' element={<Event />} />

                <Route path='/*' element={<Navigate to="/events" />} />
            </Routes>
        </main>

    </>
}

export default Home