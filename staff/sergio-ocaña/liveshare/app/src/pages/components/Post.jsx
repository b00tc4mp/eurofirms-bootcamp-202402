import logic from '../../logic'
import EditPost from './EditPost'
import AuthorButtons from "./AuthorButtons"
import HTag from "./HTags"
import { useState } from "react"


function Post({ post, onHandleUpdatePost, onHandleDeletePost, onHandleCancel }) {
    const [edit, setEdit] = useState(null)
    const [text, setText] = useState(post.text)

    const permissions = post.author.id === logic.getLoggedInUserId()

    const handleEdit = () => {
        try {
            logic.retrievePost(post.id)
                .then(res => {
                    if (post.text !== res.text) setText(res.text)
                    console.log(res)
                    setEdit(true)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error.message)

            alert(error.message)
        }
    }

    const handleUpdatedPostClick = () => {
        setEdit(null)
        onHandleUpdatePost()
    }

    const handleDeleteClick = () => {
        const deleteOrNot = confirm('Are you sure about to delete this post?')

        if (!deleteOrNot) return
        try {
            logic.deletePost(post.id)
                .then(() => onHandleDeletePost())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })


        } catch (error) {
            error.message(error)

            alert(error.message)
        }
    }

    const handleCancelClick = () => {
        setEdit(null)
        if (text !== post.text) onHandleCancel()
    }

    return <article className="w-full">
        <HTag level={3}>{post.author.username}</HTag>
        <img src={post.image} className="w-full" />
        {!edit && <><p>{post.text}</p> <time className="block text-right text-xs">{post.date}</time></>}
        {permissions ?
            (edit ? <EditPost post={post} textUpdated={text} handleUpdatedPost={handleUpdatedPostClick} handleCancel={handleCancelClick} /> :
                <AuthorButtons handleDeletedClick={handleDeleteClick} handleEdit={handleEdit} />) : ""}
    </article>
}

export default Post