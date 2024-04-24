import { useState, useEffect } from 'react'

import logic from '../logic'

import Posts from '../components/Posts'
import CreatePost from '../components/CreatePosts'

function Home({ onUserLoggedOut }) {
    const [view, setView] = useState(null);
    const [user, setUser] = useState(null);
    const [refreshStamp, setRefreshStamp] = useState(null);

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => {
        
        setRefreshStamp(Date.now())
        setView(null)
    }

    const handleDeletePost = () => {
        
    }

    console.log('Home render')

    return <>
        <header className="bg-gray-100 border-solid border-4 border-black font-bold text-xl m-1">
        {!user && <p>Loading...</p>}
        {user && <h1 className="p-3">Hello, {user.name}!</h1>}

            <nav id="top-menu">
                <button className="button" id="chat-button">💬</button>
                <button className="button" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main className="main">
             <Posts refreshStamp={ refreshStamp }/>

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
        </main>

        <footer className="footer">
            <button className="button">🏚️</button>
            <button className="button" onClick={handleCreatePostClick}>➕</button>
        </footer>
    </>
}

export default Home