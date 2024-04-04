function Home() {
  return (
    <>
      <header className="header">
        <h1>Hello, uno!</h1>

        <nav id="top-menu">
          <button className="button" id="chat-button">
            💬
          </button>
          <button className="button" id="logout-button">
            🚪
          </button>
        </nav>
      </header>

      <main className="main">
        <section id="posts-section">
          <h2>Posts</h2>

          <div id="posts-list">
            <article className="post">
              <h3>uno</h3>
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmt2M2xhMGI3ODBvZHl2MGMzYXdxa2ZzMWFxbmNtbDE4eDg0eDl6eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT5LMHxhOfscxPfIfm/giphy.gif"
                className="post-image"
              />
              <p>
                Soy Homer, que te cuentas
                <br />
                <sup>2024-03-14, 7:13:05 p.m.</sup>
              </p>
            </article>
            <article className="post">
              <h3>uno</h3>
              <img
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmczZmNtMm5idmFxd2sxN3BhMHE4cjdqZ2F0NDk3aHZsZDBlYWtkbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qhqwBvxNoQSUo/giphy.gif"
                className="post-image"
              />
              <p>
                Este es Bart
                <br />
                <sup>2024-03-18, 5:56:26 p.m.</sup>
              </p>
            </article>
          </div>
        </section>

        <section id="chat-section" className="chat-section--off">
          <h2>Chat</h2>

          <ul id="chat-users">
            <li className="chat-user chat-user-online">javier</li>
            <li className="chat-user chat-user-online">tres</li>
            <li className="chat-user chat-user-online">cuatro</li>
            <li className="chat-user chat-user-offline">dos</li>
          </ul>

          <div id="chat" className="chat--off">
            <h3 id="chat-interlocutor">username</h3>

            <ul id="chat-messages"></ul>

            <form id="chat-form">
              <label htmlFor="text">Text</label>
              <input type="text" id="text" />

              <button className="button" type="submit">
                Send
              </button>
            </form>
          </div>
        </section>

        <section
          className="container container--border-top"
          id="create-post-section"
        >
          <h2>Create Post</h2>

          <form className="form" id="create-post-form">
            <label htmlFor="image">Image</label>
            <input className="input" type="text" id="image" />

            <label htmlFor="text">Text</label>
            <input className="input" type="text" id="text" />

            <button className="button button--right" type="submit">
              Create
            </button>
          </form>

          <button
            className="button button--center"
            id="create-post-cancel-button"
          >
            Cancel
          </button>
        </section>
      </main>

      <footer className="footer">
        <button className="button" id="posts-button">
          🏚️
        </button>
        <button className="button" id="create-post-button">
          ➕
        </button>
      </footer>
    </>
  );
}

export default Home;
