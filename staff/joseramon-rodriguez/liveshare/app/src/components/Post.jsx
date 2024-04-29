import { useState } from "react"
import logic from "../logic"
import Button from "./Button"
import Form from "./Form"
import { errors } from 'com'

const { ContentError, MatchError } = errors

function Post({ post, onDeletePost, onUpdatePost, error, }) {
    const [updatePost, setUpdatePost] = useState(false)
    const [updateText, setUpdateText] = useState(post.text)

    const userId = logic.getLoggedInUserId()

    const handleUpdatePost = () => {
        try {
            logic.retrievePost(post.id)
                .then(postToUpdate => setUpdateText(postToUpdate.text))
                .catch(error => {
                    console.error(error)

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    if (error instanceof MatchError)
                        feedback = `${feedback}, please try with a registered user`
                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
            setUpdatePost(true)

        } catch (error) {
            console.error(error.message)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }
    const handleCancelUpdatePost = () => {
        setUpdatePost(false)
        setUpdateText(post.text)
    }
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        setUpdatePost(setUpdatePost)

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
            {error?.isTextError && <span className="text-red-500">{error.message}</span>}
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