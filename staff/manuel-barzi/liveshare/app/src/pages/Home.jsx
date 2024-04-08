import logic from '../logic'

function Home({ onUserLoggedOut }) {
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

    console.log('Home render')

    return <>
        <header class="header">
            <h1>Hello, {user.name}!</h1>

            <nav id="top-menu">
                <button class="button" id="chat-button">💬</button>
                <button class="button" id="logout-button" onClick={handleLogout}>🚪</button>
            </nav>
        </header>

        <main class="main">
            <section id="posts-section">
                <h2>Posts</h2>

                <div id="posts-list">
                    {
                        posts.map(post => <article key={post.id} class="post">
                            <h3>{post.author.name}</h3>
                            <img src={post.image} class="post-image" />
                            <p>{post.text}<br /><sup>{post.date}</sup></p>
                        </article>)
                    }
                </div>
            </section>

            <section id="chat-section" class="chat-section--off">
                <h2>Chat</h2>

                <ul id="chat-users"><li class="chat-user chat-user-online">wendydarling</li></ul>

                <div id="chat" class="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text" />

                        <button class="button" type="submit">Send</button>
                    </form>
                </div>
            </section>

            <section class="container container--border-top create-post-section--off" id="create-post-section">
                <h2>Create Post</h2>

                <form class="form" id="create-post-form">
                    <label htmlFor="image">Image</label>
                    <input class="input" type="text" id="image" />

                    <label htmlFor="text">Text</label>
                    <input class="input" type="text" id="text" />

                    <button class="button button--right" type="submit">Create</button>
                </form>

                <button class="button button--center" id="create-post-cancel-button">Cancel</button>
            </section>
        </main>

        <footer class="footer">
            <button class="button" id="posts-button">🏚️</button>
            <button class="button" id="create-post-button">➕</button>
        </footer>
    </>
}

export default Home