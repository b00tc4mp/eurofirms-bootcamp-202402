import { useEffect, useState } from "react"
import logic from "../logic"
import Button from "./Button"
import Form from "./Form"
import { errors } from 'com'

const { ContentError, MatchError } = errors

function Post({ post, onDeletePost, onUpdatePost }) {
    const [updateText, setUpdateText] = useState(null)
    const [error, setError] = useState(null)

    const userId = logic.getLoggedInUserId()

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback}, please correct it`
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try with a registered user`
        else
            feedback = 'sorry, there was an error, please try again later'

        if (error.message.includes('user id') || error.message.includes('post id')) {
            alert(feedback)

            return
        }

        const isTextError = error.message.includes('text')

        setError({ message: feedback, isTextError })
    }

    const handleUpdatePost = () => {
        try {
            logic.retrievePost(post.id)
                .then(postToUpdate => {
                    setUpdateText(postToUpdate.text)
                })
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
        setUpdateText(null)
    }
    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        const updateConfirmed = confirm('update?')

        if (!updateConfirmed) return

        try {
            logic.updatePost(post.id, text)
                .then(() => {
                    onUpdatePost()

                    setUpdateText(null)
                })
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleDeletePost = () => {
        const deleteConfirmed = confirm('delete?')

        if (!deleteConfirmed) return

        try {
            logic.deletePost(post.id)
                .then(() => onDeletePost())
                .catch(error => errorHandler(error))
        } catch (error) {
            errorHandler(error)
        }
    }

    return <article className=" w-full border-2 border-black ">
        <h3>{post.author.username}</h3>
        <img className="post-image" src={`${post.image}`}></img>
        {updateText !== null ? <> <Form onSubmit={handleSubmit}>
            {/* <label htmlFor="text">Edit post</label> */}
            <input id="text" defaultValue={updateText}></input>
            {error?.isTextError && <span className="text-red-500">{error.message}</span>}
            <Button type="submit" >Update</Button>
        </Form> < Button onClick={handleCancelUpdatePost}>Cancel</Button></> : post.text}
        <time>{post.date}</time>
        {updateText === null && <div>
            {post.author.id === userId && <Button onClick={handleDeletePost}>Delete post</Button>}
            {post.author.id === userId && <Button onClick={handleUpdatePost}>Update post</Button>}
        </div>}


    </article>
}

export default Post