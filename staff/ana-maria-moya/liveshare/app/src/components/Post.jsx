import { useState } from "react"
import logic from "../logic"

function Post({ post, onPostRemoved, onPostModified}) {

    const [modify, setModify] = useState(false)
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

    return <article className="w-full">
        <h3 className="font-bold">{post.author.username}</h3>
        <img src={post.image} className="w-full" />
        {!modify && <p>{post.text}</p>}
        {modify && <form onSubmit={handleModifySubmit}>
            <input type="text" defaultValue={post.text} name="text" />
            <button className="px-3" type="submit">✔</button>
        </form>}
        <time className="block text-right text-xs">{post.date}</time>
        {post.author.id === logic.getLoggedInUserId() && <div>
            <button className="px-3" onClick={handleRemovePost}>🗑️</button>
            <button className="px-3" onClick={handleModifyPost}>✏</button>
        </div>}
    </article>
}
export default Post