function Home() {
    return <>
        <header id="top-menu">
            <h1>Hello, test1!</h1>

            <nav className="top-menu--right">
                <button id="chat-button">Chat</button>
                <button id="logout-button">Log-&gt;out</button>
            </nav>
        </header>
        <section id="posts-section" className="posts-section">
            <h2>Posts</h2>
            <div id="posts-list"><article className="post"><h3>test2</h3><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhzYXpvM284ZXk2MWFrbXlma2UxeWxsMXoxc3RtNnZjMzhrOXUwNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKGOhl6hVAxkvMQ/giphy.gif" className="post-image" /><p>woahh<br /><sup>2024-03-18, 6:12:11 p.m.</sup></p></article><article className="post"><h3>test1</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHdsdmIxODI5c2Rrcng0a2ZsdjZwY2V2NWw0eGQxdDNlcmFueDd4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FAYjLwzNUzJf1Di/giphy.gif" className="post-image" /><p>my test subjects<br /><sup>2024-03-18, 6:10:51 p.m.</sup></p></article></div>
        </section>

        <section id="chat-section" className="chat-section--off">
            <h2>Chat Section</h2>
            <ul id="chat-users"><li className="chat-user chat-user-online">test2</li></ul>

            <div id="chat" className="chat--off">
                <h3 id="chat-interlocutor">username</h3>

                <ul id="chat-messages"></ul>

                <form id="chat-form">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" />

                    <button type="submit">Send</button>
                </form>
            </div>
        </section>

        <section id="create-post-section" className="create-post-section--off">
            <h2>Create post</h2>

            <form id="create-post-form">
                <label htmlFor="image">Image</label>
                <input type="text" id="image" />

                <label htmlFor="text">Text</label>
                <input type="text" id="text" />

                <button type="submit">Create Post</button>
            </form>

            <button id="create-post-cancel-button">Cancel create post</button>
        </section>

        <footer>
            <button id="posts-button">Posts</button>
            <button id="create-post-button">Create post</button>
        </footer>
    </>
}

export default Home