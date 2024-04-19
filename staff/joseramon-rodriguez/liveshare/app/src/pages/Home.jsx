import logic from "../logic"
import CreatePost from "../components/CreatePost"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import Chat from "../components/Chat"

function Home({ onLogoutClick }) {
    const [view, setView] = useState('post')
    const [createPost, setCreatePost] = useState(null)
    const [user, setUser] = useState(null)
    const [timeStamp, setTimeStamp] = useState(Date.now())

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


    const handleCreateClick = () => {
        setView('post')
        setCreatePost(null)
        setTimeStamp(Date.now())
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
            {user ? <h1>Hello , Home! {user.name}</h1> : <span>Loading...</span>}
            <nav className="top-menu--right">
                <button onClick={handleChatButton} id="chat-button">Chat</button>
                <button onClick={handleLogOutButton} id="logout-button">Log-{`>`}out</button>
            </nav>
        </header>
        {view === 'chat' && <Chat />}
        {view === 'post' && <Posts refreshPosts={timeStamp} />}
        {createPost === 'createPost' && <CreatePost onPostCreated={handleCreateClick}
            onCancelCreatePostClick={handleCancelCreatePostClick} />}
        <footer>
            <button onClick={handlePostButton} id="posts-button">Posts</button>
            <button onClick={handleCreatePostClick} id="create-post-button">Create post</button>
        </footer>
    </>

}

export default Home