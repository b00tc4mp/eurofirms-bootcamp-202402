import logic from '../logic'
import errors from '../logic/errors'
import EditPost from './EditPost'
import AuthorButtons from './AuthorButtons'
import HTag from './HTags'

import { useState } from "react"

const { MatchError, ContentError } = errors

function Post({ post, onHandleUpdatePost, onHandleDeletePost, onHandleCancel }) {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(post.text)

    const isUserAuthor = post.author.id === logic.getLoggedInUserId()

    const handleForm = (postId, text) => {

        try {
            logic.updatePost(postId, text)
                .then(() => {
                    setIsEditing(null)
                    onHandleUpdatePost()
                })
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



    const handleEdit = () => {
        try {
            logic.retrievePost(post.id)
                .then(res => {
                    if (post.text !== res.text) setText(res.text)
                    console.log(res)
                    setIsEditing(true)
                })
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

    const handleDeleteClick = () => {
        const deleteOrNot = confirm('Are you sure about to delete this post?')

        if (!deleteOrNot) return
        try {
            logic.deletePost(post.id)
                .then(() => onHandleDeletePost())
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

    const handleCancelClick = () => {
        setIsEditing(null)
        if (text !== post.text) onHandleCancel()
    }

    return <article className="w-full">
        <HTag level={3}>{post.author.username}</HTag>
        <img src={post.image} className="w-full" />
        {isEditing ?
            <EditPost post={post} textUpdated={text}
                handleCancel={handleCancelClick}
                onHandleSubmit={handleForm}
            /> :
            <>
                <p>{post.text}</p>
                <time className="block text-right text-xs">{post.date}</time>
            </>}

        {isUserAuthor && !isEditing && <AuthorButtons handleDeletedClick={handleDeleteClick} handleEdit={handleEdit} />}
    </article>
}

export default Post