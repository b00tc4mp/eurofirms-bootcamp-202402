function Post({ post }) {
    console.debug('Post render')

    return <article className="post">
        <h3>{post.author.username}</h3>
        <img src={post.image} className="post-image" />
        <p>{post.text}<br /><sup>{post.date}</sup></p>
    </article>
}

export default Post