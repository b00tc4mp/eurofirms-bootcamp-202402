import { useState } from "react"
import logic from "../logic"
import { errors } from 'com'

const { MatchError, ContentError } = errors

function Post({ post, onPostRemoved, onPostEdit }) {

    const [editPost, setEditPost] = useState(false)

    const handleRemovePost = () => {
        try {
            if (confirm('delete post?'))
                logic.removePost(post.id)
                    .then(() => onPostRemoved())
                    .catch(error => {
                        console.error(error)

                        let feedback = error.message

                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                            feedback = `${feedback},please correct it`

                        else if (error instanceof MatchError)
                            feedback = `${feedback},please verify credentials`

                        else
                            feedback = 'sorry, there was an error, please try again later'

                        alert(feedback)
                    })

        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
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

                    let feedback = error.message

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback},please correct it`

                    else if (error instanceof MatchError)
                        feedback = `${feedback},please verify credentials`

                    else
                        feedback = 'sorry, there was an error, please try again later'

                    alert(feedback)
                })
                .then(() => {
                    setEditPost(false)
                    onPostEdit()
                })
        } catch (error) {
            console.error(error)

            let feedback = error.message

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback},please correct it`
            else
                feedback = 'sorry, there was an error, please try again later'

            alert(feedback)
        }
    }

    const handleShowForm = () => {
        setEditPost(true)
    }


    const handleCancelClick = () => {
        setEditPost(false)
    }

    return <article className="w-full">
        <h3 className="font-bold">{post.author.username}</h3>
        <img src={post.image} className='w-full' />
        <p>{post.text}</p>
        <time className="block text-right text-xs mb-[10px]">{post.date}</time>
        {post.author.id === logic.getLoggedInUserId() && 
        <div className="flex flex-row">
        <button className="px-3" onClick={handleRemovePost}>🗑️</button>
        <button className="px-3" onClick={handleShowForm}>✍️</button>
        </div>}
        {editPost === true &&
            <div className="flex flex-row justify-center gap-1 ">
                <form onSubmit={handleUpdatePost} className="flex flex-row gap-1">
                    <input id='text' type="text" placeholder="edit text"></input>
                    <button type="submit">Update</button>
                </form>
                <button onClick={handleCancelClick} >Cancel</button>
            </div>
        }
    </article>
}

export default Post
    