import App from "../App"

function Home() {
return <>
    <>
    <header className="header">
        <h1>Hello, Ana María Moya Liébana!</h1>
        <nav id="top-menu">
            <button id="chat-button">💬</button>
            <button id="logout-button">🚪</button>
        </nav>
    </header>

    <main className="main">
        <section id="posts-section">
            <h2>Posts</h2>
            <div id="posts-list"><article className="post"><h3>Anamml001</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmJ4cGJkYWo0YjBvOW04Zmd0dnpmZTA5ajAyc3F6azZmZHJsZDljYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7rc0qU6m5hneMsuc/giphy.gif" className="post-image"/><p>Que ricas las palomitas<br/><sup>2024-03-19, 2:58:49 p.m.</sup></p></article><article className="post"><h3>Anamml001</h3><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTlxcW54Y3Z3aTRmZnprOHVlMGVpMnFyeGdoMDh1OGpybnZneTdlcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wBELrJgO6ZtII/giphy.gif" className="post-image"/><p>Besos<br/><sup>2024-03-19, 2:53:32 p.m.</sup></p></article></div>
        </section>
        <section id="chat-section" className="chat-section--off">
            <ul id="chat-users"><li className="chat-user chat-user-online">Esperanzaml</li><li className="chat-user chat-user-offline">Tomaml</li></ul>

                <div id="chat" className="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
        </section>
        <section id="create-post-section" className="create-post-section--off">
            <h2>Create Post</h2>

            <form id="create-post-form">
                <label htmlFor="image">Image</label>
                <input type="text" id="image"/>

                <label for="text">Text</label>
                <input className="input" type="text" id="text"/>

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
</>
}

export default Home