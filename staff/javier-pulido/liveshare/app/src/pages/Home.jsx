function Home() {
    return <>
        <header className="header">
            <h1>Hello, javier!</h1>

            <nav id="top-menu">
                <button className="button" id="chat-button">💬</button>
                <button className="button" id="logout-button">🚪</button>
            </nav>
        </header>

        <main className="main">
            <section id="posts-section">
                <h2>Posts</h2>

                <div id="posts-list"><article className="post"><h3>puli</h3><img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDQ5dDJ5ejR3N21ubHVlbG9xa3Izemx4aHh6dmVhNDczcXJ3Y2xpdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uEfZWPFl4cwFuxeUt7/giphy.gif" className="post-image"/><p>good night<br/><sup>2024-03-19, 9:57:45 a.m.</sup></p></article><article className="post"><h3>puli</h3><img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXdnMWZqaWRqcW53cGVuajhwYnpqMG53MTZkeWkyMTRiY2ZhdXJlNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1k4kzIJTw2aPK/giphy.gif" className="post-image"/><p>Cumple de Perro <br/><sup>2024-03-19, 9:33:23 a.m.</sup></p></article></div>
            </section>

            <section id="chat-section" className="chat-section--off">
                <h2>Chat</h2>

                <ul id="chat-users"><li className="chat-user chat-user-online">pepe1</li></ul>

                <div id="chat" className="chat--off">
                    <h3 id="chat-interlocutor">username</h3>

                    <ul id="chat-messages"></ul>

                    <form id="chat-form">
                        <label htmlFor="text">Text</label>
                        <input type="text" id="text"/>
                            <button className="button" type="submit">send</button>
                    </form>
                </div>
            </section>

            <section className="container container--border-top" id="create-post-section">
                <h2>Create Post</h2>

                <form className="form" id="create-post-form">
                    <label htmlFor="image">Image</label>
                    <input className="input" type="text" id="image"/>

                        <label htmlFor="text">Text</label>
                        <input className="input" type="text" id="text"/>

                            <button className="button button-rigth" type="submit">Create</button>
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