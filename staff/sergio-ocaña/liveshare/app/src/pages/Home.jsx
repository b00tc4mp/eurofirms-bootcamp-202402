import logic from "../logic/index.js"
import { errors } from 'com'
import { CreatePost, Posts, Chat, Button, HTag } from "../components"

const { MatchError, ContentError } = errors

import { useState, useEffect } from "react"
const posts = 0
const chat = 1

function Home({ onLogoutClick }) {
    const [user, setUser] = useState(null)
    const [createPost, setCreatePost] = useState(null)
    const [view, setView] = useState(posts)
    const [timeStamp, setTimeStamp] = useState(Date.now())


    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try to relog again`
        else
            feedback = 'sorry, there was an error, please try again later'

        alert(feedback)
    }

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(user => setUser(user))
                .catch(error => {
                    errorHandler(error)
                })

        } catch (error) {
            errorHandler(error)
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