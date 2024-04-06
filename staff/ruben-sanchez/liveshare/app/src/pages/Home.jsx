function Home() {



    
return <>
    <header className="header">
    <h1>Hello, Home!</h1>

    <nav id="top-menu">
        <button id="chat-button">💬</button>
        <button id="logout-button">🚪</button>
    </nav>
</header>
    <main className="main">
    <section id="posts-section">
        <h2>Posts</h2>

        <div id="posts-list">
            <article className="post">
                <h3>Coco Drilo</h3>

                <img className="post-imagte"
                    src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Qyc250NTFweG1iN3h1MTlhbnVnMHptN3E4bTdrOWlkcm44d3VhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49F5FtmOKYb3cD84/giphy.gif"/>
                <p>aqui, yo, cocodrilo!<br/><sup>2024-03-14 16:47</sup></p>
            </article>

            <article className="post">
                <h3>La Garto</h3>
                <img className="post-image"
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejdzcGg3M252ZGdsYm0ybWk1ZHk1ODFqeTF0ZHEzaGg2c2oxOWR4byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Jmn0QU5fYKqizwkR5v/giphy.gif"/>
                <p>y aqui, yo, lagarto!<br/><sup>2024-03-14 16:47</sup></p>
            </article>
        </div>
    </section>

    <section id="chat-section" className="chat-section--off">
        <h2>Chat</h2>

        <ul id="chat-users"></ul>

        <div id="chat" className="chat--off">
            <h3 id="chat-interlocutor">username</h3>

            <ul id="chat-messages"></ul>

            <form id="chat-form">
                <label htmlFor="text">Text</label>
                <input type="text" id="text"/>

                <button className="button" type="submit">Send</button>
            </form>

        </div>
    </section>

    <section id="create-post-section" className="container container--border-top" >
        <h2>Create Post</h2>

        <form id="create-post-form" className="form">
            <label htmlFor="image">Image</label>
            <input type="text" id="image" className="input"/>

            <label htmlFor="text">Text</label>
            <input type="text" id="text" className="input"/>

            <button className="button button--right" type="submit">Create</button>
        </form>

        <button className="button button--center" id="create-post-cancel-button">Cancel</button>
    </section>
</main>
    <footer>
        <button className="button" id="posts-button">🏚️</button>
        <button className='button' id="create-post-button">➕</button>
    </footer>



    

</>


}
export default Home