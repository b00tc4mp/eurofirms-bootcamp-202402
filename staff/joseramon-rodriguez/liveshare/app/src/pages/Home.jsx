import logic from "../logic"
import CreatePost from "../components/CreatePost"
import { useState } from "react"
import Posts from "../components/Posts"
import Chat from "../components/Chat"

function Home({ onLogoutClick }) {
    let posts = null
    let user = null

    try {
        posts = logic.retrievePosts()
        user = logic.retrieveUser()

    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const [view, setView] = useState('post')
    const [createPost, setCreatePost] = useState(null)

    const handleCreateClick = () => {
        setView('post')
    }

    const handleCreatePostClick = () => {
        setCreatePost('createPost')
    }

    const handleCancelCreatePostClick = () => {
        setCreatePost(null)
    }

    const handleLogOutButton = () => {
        logic.logoutUser()
        onLogoutClick()
    }

    const handlePostButton = () => {
        setView('post')
    }

    const handleChatButton = () => {
        setView('chat')
    }
    return <>
        <header id="top-menu">
            <h1>Hello , Home! {user.name}</h1>
            <nav className="top-menu--right">
                <button onClick={handleChatButton} id="chat-button">Chat</button>
                <button onClick={handleLogOutButton} id="logout-button">Log-{`>`}out</button>
            </nav>
        </header>
        {view === 'chat' && <Chat />}
        {view === 'post' && <Posts />}
        {createPost === 'createPost' && <CreatePost onPostCreated={handleCreateClick}
            onCancelCreatePostClick={handleCancelCreatePostClick} />}
        <footer>
            <button onClick={handlePostButton} id="posts-button">Posts</button>
            <button onClick={handleCreatePostClick} id="create-post-button">Create post</button>
        </footer>
    </>

}

export default Home