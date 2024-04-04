function Home() {

    return <>
        <body>
            <header>
                <h1>Hello, Sergio Ocaña!</h1>

                <nav id="top-menu">
                    <button className="button" id="chat-button">💬</button>
                    <button className="button" id="logout-button">🚪</button>
                </nav>
            </header>

            <main>
                <section id="posts-section">
                    <h2>Posts</h2>
                    <div id="posts-list"><article className="post"><h3>adad</h3><img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHMxOGFoeXc4bWo0ZDlzNm91ZnA2dGhmenNseXAwNjN5bHh4OHM1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UO5elnTqo4vSg/giphy.gif" className="post-image" /><p>JS is comming<br /><sup>2024-03-18</sup></p></article><article className="post"><h3>yeyusin</h3><img src="https://media0.giphy.com/media/tqj4m9BRURayxQAIW9/giphy.webp?cid=790b7611aygpxq5csm02gv7kwxrn0w0xp4bsv70vnrmqxhhn&amp;ep=v1_gifs_trending&amp;rid=giphy.webp&amp;ct=g" className="post-image" /><p>Monday days<br /><sup>2024-03-18</sup></p></article></div>
                </section>

                <section id="chat-section" className="chat-section--off">
                    <h2>Chat</h2>

                    <section id="chat-section">
                        <ul id="chat-users"><li className="chat-user chat-user-online">curiosidadlibre</li><li className="chat-user chat-user-online">adad</li><li className="chat-user chat-user-offline">1234</li></ul>

                        <div id="chat" className="chat--off">
                            <h3 id="chat-interlocutor">username</h3>
                            <ul id="chat-messages"></ul>
                            <form id="chat-form">
                                <label for="text">Text</label>
                                <input className="input" type="text" id="text" />
                                <button className="button" type="submit">Send</button>
                            </form>
                        </div>
                    </section>
                </section>
                <section className="create-post-section--off" id="create-post-section">
                    <h2>Create Post</h2>

                    <form id="create-post-form">
                        <label for="image">Image</label>
                        <input className="input" type="text" id="image" />

                        <label for="text">Text</label>
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
        </body>
    </>
}

export default Home