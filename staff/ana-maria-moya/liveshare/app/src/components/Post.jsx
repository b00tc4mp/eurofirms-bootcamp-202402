import logic from "../logic"

function Post({ post, onPostRemoved }) {
console.debug('Post render')

const handleRemovePost = () => {
    try {
        if (confirm('delete post?'))
        logic.removePost(post.id)
    .then(() => onPostRemoved())
    .catch(error => {
        console.error(error)

        alert(error.message)
    })
    } catch (error) {
        console.error(error)

        alert(error.message)
    }
}

return <article className="w-full">
    <h3 className= "font-bold">{post.author.username}</h3>
    <img src={post.image} className="w-full" />
    <p>{post.text}</p>
    <time className="block text-right text-xs">{post.date}</time>
    {post.author.id === logic.getLoggedInUserId() && <button className="px-3" onClick={handleRemovePost}>🗑️</button>}
</article>
}
export default Post