import { useState } from "react"
import logic from "../logic"

function Post({ post, onPostRemoved, onPostEdit }) {

    const [edit, setEdit] = useState(false)

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


    const handleUpdatePost = event => {
        try {
            event.preventDefault()
            const form = event.target

            const text = form.text.value

            logic.updatePost(post.id, text)

                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
                .then(() => {
                    setEdit(false)
                    onPostEdit()
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleShowForm = () => {
        setEdit(true)
    }


    const handleCancelClick = () => {
        setEdit(false)
    }

    return <article className="w-full">
        <h3 className="font-bold">{post.author.username}</h3>
        <img src={post.image} className='w-full' />
        <p>{post.text}</p>
        <time className="block text-right text-xs">{post.date}</time>
        {post.author.id === logic.getLoggedInUserId() && <button className="px-3" onClick={handleRemovePost}>❌</button>}
        {post.author.id === logic.getLoggedInUserId() && <button className="px-3" onClick={handleShowForm}>⛏</button>}
        {edit === true &&
            <>
                <form onSubmit={handleUpdatePost}>
                    <label htmlFor="text">edit post</label>
                    <input id='text' type="text"></input>
                    <button type="submit">Update</button>
                </form>
                <button onClick={handleCancelClick}>Cancel</button>
            </>
        }
    </article>
}

export default Post