import logic from '../logic'
import { errors } from 'com'
import EditPost from './EditPost'
import AuthorButtons from './AuthorButtons'
import HTag from './HTag'

import { useState } from "react"

const { MatchError, ContentError } = errors

function Post({ post, onHandleUpdatePost, onHandleDeletePost, onHandleCancel }) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(post.text)
    const [error, setError] = useState(null)

    const isUserAuthor = post.author.id === logic.getLoggedInUserId()

    const errorHandler = error => {
        console.error(error)

        let feedback = error.message

        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
            if (error.message.includes('userId') || error.message.includes('postId'))
                feedback = `${feedback}, please try to relog`
            else
                feedback = `${feedback}, please correct it`
        }
        else if (error instanceof MatchError)
            feedback = `${feedback}, please try to relog`
        else
            feedback = 'sorry, there was an error, please try again later'

        if (error.message.includes('userId') || error.message.includes('postId')) {
            alert(feedback)
        }

        const isTextError = error.message.includes('text')

        setError({ message: feedback, isTextError })
    }
    const handleForm = (postId, text) => {

        try {
            logic.updatePost(postId, text)
                .then(() => {
                    setIsEditing(null)
                    onHandleUpdatePost()
                })
                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleEdit = () => {
        try {
            logic.retrievePost(post.id)
                .then(res => {
                    setText(res.text)

                    setIsEditing(true)
                })
                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleDeleteClick = () => {
        const deleteOrNot = confirm('Are you sure about to delete this post?')

        if (!deleteOrNot) return
        try {
            logic.deletePost(post.id)
                .then(() => onHandleDeletePost())
                .catch(error => errorHandler(error))

        } catch (error) {
            errorHandler(error)
        }
    }

    const handleCancelClick = () => {
        setIsEditing(null)
        if (text !== post.text) onHandleCancel()
    }

    return <article className="w-full">
        <HTag level={3}>{post.author.username}</HTag>
        <img src={post.image} className="w-full" />
        {isEditing ?
            <EditPost post={post}
                textUpdated={text}
                handleCancel={handleCancelClick}
                onHandleSubmit={handleForm}
                error={error}
            /> :
            <>
                <p>{post.text}</p>
                <time className="block text-right text-xs">{post.date}</time>
            </>}

        {isUserAuthor && !isEditing && <AuthorButtons handleDeletedClick={handleDeleteClick} handleEdit={handleEdit} />}
    </article>
}

export default Post