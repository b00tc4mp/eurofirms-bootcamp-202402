function Home() {
    return <>
        <header className="header">
            <h1>Hello, David Aroca!</h1>

            <nav id="top-menu">
                <button className="button" id="chat-button">💬</button>
                <button className="button" id="logout-button">🚪</button>
            </nav>
        </header>

        <main className="main">
            <section id="posts-section">
                <h2>Posts</h2>

                <div id="posts-list"><article className="post"><h3>Ronnie Coleman</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2hxcmZsbXNkZTd4dXVsZWhwM2lmMjUxZGQzdmhsNzNzMjZhd3g4YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/h24Y1pZIGKXzG/200.webp" className="post-image" /><p>aqui, yo, haciendo Pecto Pop!<br /><sup>2024-03-18, 4:51:01 p.m.</sup></p></article><article className="post"><h3>peterpan</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5wbjMxeDV1OXFodHk1OXZtbmV6dGx6YzJmOG5wb213ZDljYmZjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q8COxfEcyDdwJQIBan/giphy.gif" className="post-image" /><p>push the button<br /><sup>2024-03-18, 4:50:30 p.m.</sup></p></article><article className="post"><h3>peterpan</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd28xcnpsOW52ZG42OHBzajJiOXRqZ2cyN2s0MWo3NHZ0cmJ3dW5iNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gZ5BHqsmpJe8IdXhN2/giphy.gif" className="post-image" /><p>complex polygon<br /><sup>2024-03-18, 3:41:35 p.m.</sup></p></article><article className="post"><h3>wendydarling</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdleDAzajVwbWQzOGNlOXJ3YnBnanliaWFzczJoOW94cXQ4bW95dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhKa2NgtEfX7Zy08bF/giphy.gif" className="post-image" /><p>pepito<br /><sup>2024-03-15, 3:33:19 p.m.</sup></p></article></div>
            </section>

            <section id="chat-section" className="chat-section--off">
                <h2>Chat</h2>

                <ul id="chat-users"><li className="chat-user chat-user-online">wendydarling</li></ul>

                <div id="chat" className="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label htmlForf="text">Text</label>
                        <input type="text" id="text" />

                        <button className="button" type="submit">Send</button>
                    </form>
                </div>
            </section>

            <section className="container container--border-top create-post-section--off" id="create-post-section">
                <h2>Create Post</h2>

                <form className="form" id="create-post-form">
                    <label htmlFor="image">Image</label>
                    <input className="input" type="text" id="image" />

                    <label htmlFor="text">Text</label>
                    <input className="input" type="text" id="text" />

                    <button className="button button--right" type="submit">Create</button>
                </form>

                <button className="button button--center" id="create-post-cancel-button">Cancel</button>
            </section>
        </main>

        <footer className="footer">
            <button className="button" id="posts-button">🏚️</button>
            <button className="button" id="create-post-button">➕</button>
        </footer>
    </>
}

export default Home