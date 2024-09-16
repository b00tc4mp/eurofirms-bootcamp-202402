import { useState } from 'react'

import logic from '../logic'

import Posts from '../components/Posts'
import CreatePost from '../components/CreatePost'

function Home({ onUserLoggedOut }) {
    const [view, setView] = useState(null)

    let user = null

    try {
        user = logic.retrieveUser()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleLogout = () => {
        logic.logoutUser()

        onUserLoggedOut()
    }

    let posts = []

    try {
        posts = logic.retrievePosts()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleCreatePostClick = () => setView('create-post')

    const handleCreatePostCancelClick = () => setView(null)

    const handlePostCreated = () => setView(null)

    console.log('Home render')

    return <>
        <header className="header">
            <h1>Hello, {user.name}!</h1>

            <nav id="top-menu">
                <button className="button" id="chat-button">💬</button>
                <button className="button" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main className="main">
            <Posts />

            <section id="chat-section" className="chat-section--off">
                <h2>Chat</h2>

                <ul id="chat-users"><li className="chat-user chat-user-online">wendydarling</li></ul>

                <div id="chat" className="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" />

                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </section>

            {view === 'create-post' && <CreatePost onCancelClick={handleCreatePostCancelClick} onPostCreated={handlePostCreated} />}
        </main>

        <footer className="footer">
            <button className="button">🏚️</button>
            <button className="button" onClick={handleCreatePostClick}>➕</button>
        </footer>
    </>
}

export default Home