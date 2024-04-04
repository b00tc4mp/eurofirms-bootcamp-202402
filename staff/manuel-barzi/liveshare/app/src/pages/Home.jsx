function Home() {
    return <>
        <header class="header">
            <h1>Hello, Peter Pan!</h1>

            <nav id="top-menu">
                <button class="button" id="chat-button">💬</button>
                <button class="button" id="logout-button">🚪</button>
            </nav>
        </header>

        <main class="main">
            <section id="posts-section">
                <h2>Posts</h2>

                <div id="posts-list"><article class="post"><h3>peterpan</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczYzYXk2Mnl2azM1M3l6NHd4OHV5aW81dHFoenppdnN5M3JnMnRlciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aRub447VqVyuSygFBY/giphy.gif" class="post-image" /><p>here i am<br /><sup>2024-03-18, 4:57:55 p.m.</sup></p></article><article class="post"><h3>wendydarling</h3><img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExazFmaHBkMnZsdXgxc3A5a25ia25zcGE5c2xmNHRkZmlhc2M0MTI2OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gBbKu5VhQDGb6/giphy.gif" class="post-image" /><p>bye cruel world<br /><sup>2024-03-18, 4:53:52 p.m.</sup></p></article><article class="post"><h3>peterpan</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3QwbXhlNGo3cmdmMTliamdlZjZ2enVpN2JmZG94eW5kbXF5dTBiZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tqj4m9BRURayxQAIW9/giphy.gif" class="post-image" /><p>monday...<br /><sup>2024-03-18, 4:52:28 p.m.</sup></p></article><article class="post"><h3>peterpan</h3><img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXpwdjAyNDk5OGM0cXc1d3JpYmJ3cnJrZmh1b21xaTR5aWtlNXZkMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0IybQ6l8nfKjxQv6/giphy.gif" class="post-image" /><p>what!??<br /><sup>2024-03-18, 4:51:01 p.m.</sup></p></article><article class="post"><h3>peterpan</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG5wbjMxeDV1OXFodHk1OXZtbmV6dGx6YzJmOG5wb213ZDljYmZjZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q8COxfEcyDdwJQIBan/giphy.gif" class="post-image" /><p>push the button<br /><sup>2024-03-18, 4:50:30 p.m.</sup></p></article><article class="post"><h3>peterpan</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd28xcnpsOW52ZG42OHBzajJiOXRqZ2cyN2s0MWo3NHZ0cmJ3dW5iNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gZ5BHqsmpJe8IdXhN2/giphy.gif" class="post-image" /><p>complex polygon<br /><sup>2024-03-18, 3:41:35 p.m.</sup></p></article><article class="post"><h3>wendydarling</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdleDAzajVwbWQzOGNlOXJ3YnBnanliaWFzczJoOW94cXQ4bW95dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhKa2NgtEfX7Zy08bF/giphy.gif" class="post-image" /><p>pepito<br /><sup>2024-03-15, 3:33:19 p.m.</sup></p></article><article class="post"><h3>wendydarling</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGdleDAzajVwbWQzOGNlOXJ3YnBnanliaWFzczJoOW94cXQ4bW95dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AhKa2NgtEfX7Zy08bF/giphy.gif" class="post-image" /><p>hello girafe<br /><sup>2024-03-14, 5:53:50 p.m.</sup></p></article></div>
            </section>

            <section id="chat-section" class="chat-section--off">
                <h2>Chat</h2>

                <ul id="chat-users"><li class="chat-user chat-user-online">wendydarling</li></ul>

                <div id="chat" class="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label for="text">Text</label>
                        <input type="text" id="text" />

                        <button class="button" type="submit">Send</button>
                    </form>
                </div>
            </section>

            <section class="container container--border-top create-post-section--off" id="create-post-section">
                <h2>Create Post</h2>

                <form class="form" id="create-post-form">
                    <label for="image">Image</label>
                    <input class="input" type="text" id="image" />

                    <label for="text">Text</label>
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