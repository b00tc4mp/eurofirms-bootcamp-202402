import logic from "../logic"
import CreatePost from "../components/CreatePost"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"

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
        setCreatePost(null)
    }

    return <>
        <header className="flex justify-between items-center border-b-2 border-black fixed top-0 w-full bg-white h-12 px-2 box-border" id="top-menu">
            {user ? <h1>Hello , Home! {user.name}</h1> : <span>Loading...</span>}
            <nav className="px-3">
                <button onClick={handleLogOutButton} id="logout-button">Log-{`>`}out</button>
            </nav>
        </header>
        <main className="main">
            {view === 'post' && <Posts refreshPosts={timeStamp} />}
            {createPost === 'createPost' && <CreatePost onPostCreated={handleCreateClick}
                onCancelCreatePostClick={handleCancelCreatePostClick} />}
        </main>
        <footer className="flex justify-center items-center border-t-2 bprder-black fixed bottom-0 w-full bg-white h-12 px-2 box-border">
            <button className="px-3" onClick={handlePostButton} id="posts-button">Posts</button>
            <button className="px-3" onClick={handleCreatePostClick} id="create-post-button">Create post</button>
        </footer>
    </>

}

export default Home