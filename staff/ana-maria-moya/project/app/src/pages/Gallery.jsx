import { useState, useEffect } from 'react'
import { errors } from 'com'

import logic from '../logic'

import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'

const { ContentError, MatchError } = errors

function Gallery({ onUserLoggedOut }) {
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

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => {
        setView(null)
        setRefreshStamp(Date.now())
    }

    console.log('Gallery render')

    return <>
       
        <main className="main">
            {!user && <p>GALERIA</p>}
            {user && <h1>Hello, {user.name}!</h1>}

            <Posts refreshStamp={refreshStamp} />

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
            <button className="px-3">🏚️</button>
            <button className="px-3" onClick={handleCreatePostClick}>➕</button>
        </main>

       
    </>
}

export default Gallery