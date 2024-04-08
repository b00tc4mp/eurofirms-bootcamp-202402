import { Component } from "react"
import logic from "../logic"
import CreatePost from "./CreatePost"

class Home extends Component {
    constructor(props) {
        super()

        const posts = logic.retrievePosts()
        this.state = { view: 'post', posts: posts }
        this.props = props
    }

    handleCreateClick() {
        const newPosts = logic.retrievePosts()

        this.setState({ view: 'post', posts: newPosts })
    }

    handleCreatePostClick() {
        this.setState({ view: 'createPost' })
    }

    handleCancelCreatePostClick() {
        this.setState({ view: 'post' })
    }

    handleLogOutButton() {
        logic.logoutUser()
        this.props.onLogoutClick()
    }
    render() {
        return <>
            <header id="top-menu">
                <h1>Hello , Home!</h1>
                <nav className="top-menu--right">
                    <button id="chat-button">Chat</button>
                    <button onClick={() => this.handleLogOutButton()} id="logout-button">Log-{`>`}out</button>
                </nav>
            </header>
            <section id="posts-section" className="posts-section">
                <h2>Posts</h2>
                <div id="posts-list">
                    {this.state.posts.map((post => <article key={post.id} className="post">
                        <h3>{post.author.username}</h3>
                        <img className="post-image" src={`${post.image}`}></img>
                        <p>{post.text}<br /><sup>{post.date}</sup></p>
                    </article>))}
                </div>
            </section>
            {this.state.view === 'createPost' && <CreatePost onPostCreated={() => this.handleCreateClick()}
                onCancelCreatePostClick={() => this.handleCancelCreatePostClick()} />}
            <footer>
                <button id="posts-button">Posts</button>
                <button onClick={() => this.handleCreatePostClick()} id="create-post-button">Create post</button>
            </footer>
        </>
    }
}

export default Home