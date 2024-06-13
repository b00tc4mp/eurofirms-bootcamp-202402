import { useState, useEffect } from "react"
import logic from "../logic"
import Posts from "../components/Posts"
import CreatePost from "../components/CreatePost"

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
    const handleHomeClick = () => setView(null)

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => {
        setView(null)
        setRefreshStamp(Date.now())
    }

    return <>
        <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-white  h-12 px-2 box-border">
            {!user && <p>Loading...</p>}
            {user && <h1>Hello, {user.name}</h1>}

            <nav>
                <button className="px-3" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main className="main">

            <section id="posts-section">

                <div id="posts-list" ></div>
            </section>
            <Posts refreshStamp={refreshStamp} />

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}

        </main>

        <footer className="flex justify-center items-center border-t-2 border-black fixed bottom-0 w-full bg-white h-12px-2 box border">
            <button onClick={handleHomeClick} className="px-3" >🏠</button>
            <button className="px-3" onClick={handleCreatePostClick}>📆</button>
        </footer>
    </>
}

export default Home