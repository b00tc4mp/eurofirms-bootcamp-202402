import { useState, useEffect } from 'react'
import logic from '../logic'
import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'

function Home({ onUserLoggedOut }) {
    const [view, setView] = useState(null)
    const [user, setUser] = useState(null)
    const [refreshStamp, setRefreshStamp] = useState(null)

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
        setView(null)
        setRefreshStamp(Date.now())
    }

    console.log('Home render')

    return (
        <>
            <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-gray-800 h-13 px-4 text-white">
                {!user && <p>Loading...</p>}
                {user && <h1 className="text-lg font-bold">Hello, {user.name}!</h1>}
                <nav>
                    <button className="px-3 text-white" id="logout-button" onClick={handleLogout}>🚪</button>
                </nav>
            </header>

            <main className="main mt-16 px-4">
                <Posts refreshStamp={refreshStamp} />
                {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
            </main>

            <footer className="flex justify-center items-center border-t-2 border-black fixed bottom-0 w-full bg-gray-800 h-13 px-3 text-white">
                <button className="px-3 text-white">🏚️</button>
                <button className="px-3 text-white" onClick={handleCreatePostClick}>➕</button>
            </footer>
        </>
    )
}

export default Home
