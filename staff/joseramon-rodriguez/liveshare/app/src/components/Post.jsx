import { useState } from "react"
import logic from "../logic"
import Button from "./Button"
import Form from "./Form"
import Input from "./Input"



function Post({ post, onDeletePost, onUpdatePost }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updateText, setUpdateText] = useState(post.text)

    const userId = logic.getLoggedInUserId()

    const handleUpdatePost = () => {
        logic.retrievePost(post.id)
            .then(postToUpdate => setUpdateText(postToUpdate.text))

        setUpdatePost(true)
    }
    const handleCancelUpdatePost = () => {
        setUpdatePost(false)
        setUpdateText(post.text)
    }
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        setUpdatePost(false)

        onUpdatePost(post.id, text)
    }

    const handleChange = event => {
        setUpdateText(event.target.value)

    }

    return <article className="post">
        <h3>{post.author.username}</h3>
        <img className="post-image" src={`${post.image}`}></img>
        {updatePost ? <> <Form onSubmit={handleSubmit}>
            {/* <label htmlFor="text">Edit post</label> */}
            <input id="text" value={updateText} onChange={handleChange}></input>
            <Button type="submit" >Update</Button>
        </Form> < Button onClick={handleCancelUpdatePost}>Cancel</Button></> : post.text}
        <time>{post.date}</time>
        {!updatePost && <div>
            {post.author.id === userId && <Button onClick={() => onDeletePost(post.id)}>Delete post</Button>}
            {post.author.id === userId && <Button onClick={handleUpdatePost}>Update post</Button>}
        </div>}


    </article>
}

export default Post