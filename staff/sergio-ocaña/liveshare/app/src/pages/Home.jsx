import { Component } from "react"
import CreatePost from "./sections/CreatePost"
import Posts from "./sections/Posts"
import logic from "../logic"
import Chat from "./sections/Chat"


class Home extends Component {
    constructor(props) {
        super()
        this.props = props
        try {
            const user = logic.retrieveUser()
            const posts = logic.retrievePosts()

            this.state = { createPost: 'hide', view: 'posts', posts, user }
        } catch (error) {
            console.error(error)
            alert(error.message)
        }

    }
    handleChatButton() {
        this.setState({ view: 'chat' })
    }

    handleLogoutButton() {
        this.props.onLogoutClick()
    }
    handlePostButton() {
        this.setState({ view: 'posts' })
    }

    handleCreatePostButton() {
        this.setState({ createPost: 'show' })
    }

    handleSendCreateButton() {
        const updatedPosts = logic.retrievePosts()

        this.setState({ createPost: 'hide', posts: updatedPosts })
    }

    handleCancelCreateButton() {
        this.setState({ createPost: 'hide' })
    }


    render() {
        debugger
        const username = this.state.user.username
        return <>

            <header>
                <h1>{`Hola ${username}!`}</h1>

                <nav id="top-menu">
                    <button className="button" id="chat-button" onClick={() => this.handleChatButton()}>💬</button>
                    <button className="button" id="logout-button" onClick={() => this.handleLogoutButton()}>🚪</button>
                </nav>
            </header >

            <main>
                {this.state.view === 'posts' && < Posts postToRender={this.state.posts} />}
                {this.state.view === 'chat' && < Chat />}
                {this.state.createPost === 'show' && <CreatePost onSendClick={() => this.handleSendCreateButton()} onCancelCreateClick={() => this.handleCancelCreateButton()} />}
            </main>
            <footer className="footer">
                <button className="button" id="posts-button" onClick={() => this.handlePostButton()}>🏚️</button>
                <button className="button" id="create-post-button" onClick={() => this.handleCreatePostButton()}>➕</button>
            </footer>

        </>
    }
}

export default Home