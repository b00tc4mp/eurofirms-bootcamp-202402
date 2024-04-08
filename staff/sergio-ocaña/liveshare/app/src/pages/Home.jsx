import React, { Component } from "react"
import CreatePost from "./sections/CreatePost"
import Posts from "./sections/Posts"
import logic from "../logic"
import Chat from "./sections/Chat"
import { useState } from "react"

function Home({ onLogoutClick }) {
    let loggedUser
    let initialPosts

    try {
        loggedUser = logic.retrieveUser()
        initialPosts = logic.retrievePosts()

    } catch (error) {
        console.error(error)
        alert(error.message)
    }
    const [user, setUser] = React.useState(loggedUser)
    const [posts, setPosts] = React.useState(initialPosts)
    const [createPost, setCreatePost] = React.useState('hide')
    const [view, setView] = React.useState('posts')

    const handleChatButton = () => setView('chat')

    const handleLogoutButton = () => {
        logic.logoutUser()

        onLogoutClick()
    }
    const handlePostButton = () => setView('posts')


    const handleCreatePostButton = () => setCreatePost('show')


    const handleSendCreateButton = () => {
        const updatedPosts = logic.retrievePosts()
        // this.setState({ createPost: 'hide', posts: updatedPosts })
        setPosts(updatedPosts)
        setCreatePost('hide')
    }

    const handleCancelCreateButton = () => setCreatePost('hide')

    const username = user.username
    return <>

        <header>
            <h1>{`Hola ${username}!`}</h1>

            <nav id="top-menu">
                <button className="button" id="chat-button" onClick={() => handleChatButton()}>💬</button>
                <button className="button" id="logout-button" onClick={() => handleLogoutButton()}>🚪</button>
            </nav>
        </header >

        <main>
            {view === 'posts' && < Posts postToRender={posts} />}
            {view === 'chat' && < Chat />}
            {createPost === 'show' && <CreatePost onSendClick={() => handleSendCreateButton()} onCancelCreateClick={() => handleCancelCreateButton()} />}
        </main>
        <footer className="footer">
            <button className="button" id="posts-button" onClick={() => handlePostButton()}>🏚️</button>
            <button className="button" id="create-post-button" onClick={() => handleCreatePostButton()}>➕</button>
        </footer>

    </>

}

export default Home