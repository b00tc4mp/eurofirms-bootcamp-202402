import { useState } from 'react'

import logic from '../logic'

function Post({ post, onPostRemoved, onPostModified, userRole }) {
    const [modify, setModify] = useState(false)

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

    const handleModifyPost = () => setModify(true)

    const handleModifySubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        try {
            logic.modifyPost(post.id, text)
                .then(() => {
                    onPostModified()

                    setModify(false)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Post render')

    return (
        <article className="w-full md:flex">
            <h3 className="font-bold">{post.author.username}</h3>
            {post.image && <img src={post.image} className="w-full" alt="Post Image" />}
            {post.video && (
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${post.video.slice(-11)}`}
                        title="Post Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            )}
            {!modify && <p>{post.text}</p>}
            {modify && (
                <form onSubmit={handleModifySubmit}>
                    <input type="text" defaultValue={post.text} name="text" />
                    <button className="px-3" type="submit">✅</button>
                </form>
            )}
            <time className="block text-right text-xs">{post.date}</time>
            {userRole === 'admin' && (
                <div>
                    <button className="px-3" onClick={handleModifyPost}>📝</button>
                    <button className="px-3" onClick={handleRemovePost}>🗑️</button>
                </div>
            )}
        </article>
    )
}
export default Post