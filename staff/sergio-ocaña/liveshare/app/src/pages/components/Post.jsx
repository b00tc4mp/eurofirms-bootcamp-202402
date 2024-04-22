import { useState } from "react"
import EditPost from './EditPost'
import AuthorButtons from "./AuthorButtons"
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

    return <article className="post">
        <h3>{post.author.username}</h3>
        <img src={post.image} className="post-image" />
        <p>{post.text}<br /><sup>{post.date}</sup></p>
        {permissions ? (edit ? <EditPost post={post} handleUpdatedPost={handleUpdatedPostClick} handleCancel={handleCancelClick} /> : <AuthorButtons postId={post.id} handleDeletedClick={handleDeleteClick} handleEdit={handleEdit} />) : " "}
    </article>
}

export default Post