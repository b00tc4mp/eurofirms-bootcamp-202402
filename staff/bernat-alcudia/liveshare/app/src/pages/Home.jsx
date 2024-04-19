import { useState, useEffect } from "react"
import logic from "../logic"
import Posts from "../components/Posts"
import CreatePost from "../components/CreatePost"


function Home(onUserLoggedOut) {
    const [view, setView] = useState(null)
    const [user, setUser] = useState(null)


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

    const handlePostCreated = () => setView(null)

    return <>
        <header className="header">
            {!user && <p>Loading...</p>}
            {user && <h1>Hello, {user.name}</h1>}
            <nav id="top-menu">
                <button id="chat-button">👩‍👧‍👦</button>
                <button id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main className="main">

            <section id="posts-section">

                <div id="posts-list" ></div>
            </section>
            {/* <Posts /> */}

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}

        </main>

        <footer className="footer">
            <button className="button" >🏠</button>
            <button className="button" onClick={handleCreatePostClick}></button>
        </footer>
    </>
}

export default Home