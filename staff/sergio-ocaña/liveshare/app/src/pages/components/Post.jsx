function Post({ post }) {

    return <article className="post">
        <h3>{post.author.username}</h3>
        <img src={post.image} className="post-image" />
        <p>{post.text}<br /><sup>{post.date}</sup></p>
        {post.author.id === sessionStorage.userId && <button className="button button-edit">✏️</button>}
        {post.author.id === sessionStorage.userId && <button className="button button-delete">🗑️</button>}
    </article>
}

export default Post