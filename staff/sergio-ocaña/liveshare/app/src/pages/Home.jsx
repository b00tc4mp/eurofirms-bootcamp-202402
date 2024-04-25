
import CreatePost from "./components/CreatePost.jsx"
import Posts from "./components/Posts.jsx"
import logic from "../logic/index.js"
import Chat from "./components/Chat.jsx"
import Button from "./components/Button.jsx"
import HTag from "./components/HTags.jsx"

import { useState, useEffect } from "react"
const posts = 0
const chat = 1

function Home({ onLogoutClick }) {


    const [user, setUser] = useState(null)
    const [createPost, setCreatePost] = useState(null)
    const [view, setView] = useState(posts)
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

    const handleChatButton = () => setView(chat)

    const handleLogoutButton = () => {
        logic.logoutUser()

        onLogoutClick()
    }
    const handlePostButton = () => setView(posts)

    const handleCreatePostButton = () => setCreatePost(true)

    const handleSendCreateButton = () => {
        setCreatePost(null)

        setTimeStamp(Date.now())
    }

    const handleCancelCreateButton = () => setCreatePost(null)


    return <>

        <header className="flex  justify-between  border-b-2 border-black fixed top-0 w-full bg-white h-12 px-2 py-3 box-border">
            {!user && <p>Loading...</p>}
            {user && <HTag>{`Hola ${user.username}!`}</HTag>}

            <nav>
                <Button onClick={handleChatButton}>💬</Button>
                <Button onClick={handleLogoutButton}>🚪</Button>
            </nav>
        </header >

        <main>
            {view === posts && <Posts timeStamp={timeStamp} />}
            {view === chat && < Chat />}
            {createPost && <CreatePost onSendClick={handleSendCreateButton} onCancelCreateClick={handleCancelCreateButton} />}
        </main >
        <footer className="flex justify-center border-t-2 border-black fixed bottom-0 w-full bg-white h-8 px-2 box-border">
            <Button onClick={handlePostButton}>🏚️</Button>
            <Button onClick={handleCreatePostButton}>➕</Button>
        </footer>

    </>

}

export default Home