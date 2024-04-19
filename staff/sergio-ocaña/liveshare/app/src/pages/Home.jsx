
import CreatePost from "./components/CreatePost.jsx"
import Posts from "./components/Posts.jsx"
import logic from "../logic/index.js"
import Chat from "./components/Chat.jsx"
import { useState, useEffect } from "react"

function Home({ onLogoutClick }) {


    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState(null)
    const [createPost, setCreatePost] = useState('hide')
    const [view, setView] = useState('posts')
    const [timeStamp, setStamp] = useState(Date.now())

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })

            // initialPosts = logic.retrievePosts()

        } catch (error) {
            console.error(error)
            alert(error.message)
        }

    }, [])

    useEffect(() => {
        try {
            logic.retrievePosts()
                .then(posts => setPosts(posts.toReversed()))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [timeStamp])

    const handleChatButton = () => setView('chat')

    const handleLogoutButton = () => {
        logic.logoutUser()

        onLogoutClick()
    }
    const handlePostButton = () => setView('posts')

    const handleCreatePostButton = () => setCreatePost('show')

    const handleSendCreateButton = () => {
        const updatedPosts = logic.retrievePosts()

        setPosts(updatedPosts)
        setCreatePost('hide')
        setStamp(Date.now())
    }

    const handleCancelCreateButton = () => setCreatePost('hide')


    return <>

        <header>
            {!user && <p>Loading...</p>}
            {user && <h1>{`Hola ${user.username}!`}</h1>}

            <nav id="top-menu">
                <button className="button" id="chat-button" onClick={() => handleChatButton()}>💬</button>
                <button className="button" id="logout-button" onClick={() => handleLogoutButton()}>🚪</button>
            </nav>
        </header >

        <main>
            {view === 'posts' && posts ? <Posts postToRender={posts} /> : <span>loading posts....</span>}
            {view === 'chat' && < Chat />}
            {createPost === 'show' && <CreatePost onSendClick={() => handleSendCreateButton()} onCancelCreateClick={() => handleCancelCreateButton()} />}
        </main >
        <footer className="footer">
            <button className="button" id="posts-button" onClick={() => handlePostButton()}>🏚️</button>
            <button className="button" id="create-post-button" onClick={() => handleCreatePostButton()}>➕</button>
        </footer>

    </>

}

export default Home