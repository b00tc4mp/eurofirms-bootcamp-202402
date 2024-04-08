
function Posts({ postToRender }) {
    const posts = postToRender

    return <section id="posts-section">
        <h2>Posts</h2>
        <div id="posts-list">
            {posts.map((post =>
                <article key={post.id} className="post">
                    <h3>{post.author.username}</h3>
                    <img src={`${post.image}`} className="post-image" />
                    <p>{post.text}<br />
                        <sup>{post.date}</sup>
                    </p>
                </article>
            ))}
        </div>
    </section>
}
export default Posts