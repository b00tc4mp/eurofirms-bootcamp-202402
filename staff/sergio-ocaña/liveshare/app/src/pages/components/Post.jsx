import { useState } from "react"
import EditPost from './EditPost'
import AuthorButtons from "./AuthorButtons"
import HTag from "./HTags"

function Post({ post, autoRefresh }) {
    const [edit, setEdit] = useState(null)
    const permissions = post.author.id === sessionStorage.userId


    const handleEdit = () => setEdit(true)
    const handleUpdatedPostClick = () => {
        setEdit(null)
        autoRefresh()
    }
    const handleDeleteClick = () => autoRefresh()
    const handleCancelClick = () => setEdit(null)

    return <article className="w-full">
        <HTag level={3}>{post.author.username}</HTag>
        <img src={post.image} className="w-full" />
        {!edit && <><p>{post.text}</p> <time className="block text-right text-xs">{post.date}</time></>}
        {permissions ? (edit ? <EditPost post={post} handleUpdatedPost={handleUpdatedPostClick} handleCancel={handleCancelClick} /> : <AuthorButtons postId={post.id} handleDeletedClick={handleDeleteClick} handleEdit={handleEdit} />) : " "}
    </article>
}

export default Post