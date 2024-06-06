import { useState, useEffect } from 'react'
import logic from '../logic'
import CreateComment from './CreateComment'
import ToggleLikeButton from './ToggleLikeButton'
import { useNavigate } from 'react-router-dom'

function Post({ post, onPostRemoved, onPostModified, userRole, user }) {

    const [modifyPost, setModifyPost] = useState(false)
    const [comments, setComments] = useState([])
    const [modifyComment, setModifyComment] = useState({ id: '', text: '' })
    const [userId, setUserId] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        refreshComments();
    }, []);

    const refreshComments = () => {
        try {
            logic.retrieveComments(post.id)
                .then(comments => setComments(comments))
                .catch(error => console.error(error));
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

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


    const handleModifySubmit = event => {
        event.preventDefault()

        const form = event.target

        const text = form.text.value

        try {
            logic.modifyPost(post.id, text)
                .then(() => {
                    onPostModified()

                    setModifyPost(false)
                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    const handleModifyPost = () => setModifyPost(true)


    const handleCommentCreated = () => {
        refreshComments();
    }



    const handleRemoveComment = (commentId) => {
        try {
            if (confirm('Delete comment?')) {
                logic.removeComment(post.id, commentId)
                    .then(() => {
                        refreshComments();
                    })
                    .catch(error => {
                        console.error(error);

                        alert(error.message)
                    });
            }
        } catch (error) {
            if (error.message === 'token expired') {
                logic.logoutUser()

                alert('session expired')

                navigate('/login')

                return
            }
            console.error(error)

            alert(error.message)
        }
    };

    const handleModifyComment = (event) => {
        event.preventDefault()
        try {
            logic.modifyComment(post.id, modifyComment.id, modifyComment.text)
                .then(() => {
                    refreshComments()
                    setModifyComment({ id: '', text: '' });
                })
                .catch(error => {
                    console.error(error)

                    alert(error);
                });
        } catch (error) {
            if (error.message === 'token expired') {
                logic.logoutUser()

                alert('session expired')

                navigate('/login')

                return
            }
            console.error(error)

            alert(error.message)
        }
    }
    const handleEditComment = (commentId, commentText) => {
        setModifyComment({ id: commentId, text: commentText });
    };

    const handleCancelModify = () => {
        setModifyComment({ id: '', text: '' });
    };

    const handleToggleLikePost = () => {
        try {
            logic.toggleLikePost(post.id)
                .then(() => {
                    onPostModified()


                })
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            if (error.message === 'token expired') {
                logic.logoutUser()

                alert('session expired')

                navigate('/login')

                return
            }

            console.error(error)
if(error.message.includes('token'))
    error.message = 'user must be logged in'
            alert(error.message)
        }
    }

    console.debug('Post render')

    useEffect(() => {
        try {
            const loggedUserId = logic.getLoggedInUserId()

            setUserId(loggedUserId)
        } catch (error) {
            if (error.message === 'token expired') {
                logic.logoutUser()

                alert('session expired')

                navigate('/login')
            }
        }
    }, [])

    const isLiked = logic.isUserLoggedIn() && post.likes.includes(userId)

    function formatDate(isoDate) {
        const date = new Date(isoDate)
        
        return date.toLocaleString()
        
    }

    return (

        <article className="w-full md:flex bg-white p-2">
            <h3 className="font-bold cursor-pointer">{post.author.username}</h3>
            {post.image && <img src={post.image} className="w-full" alt="Post Image" />}
            {post.video && (
                <div className="aspect-w-16 h-[800px]">
                    <iframe
                        className="w-full h-full"
                        src={`https://www.tiktok.com/embed/${post.video.slice(-19)}`}
                        title="Post Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            )}
            {!modifyPost && <p>{post.text}</p>}
            {modifyPost && (
                <form onSubmit={handleModifySubmit}>
                    <input type="text" defaultValue={post.text} name="text" />
                    <button className="px-3" type="submit">✅</button>
                </form>
            )}
            <time className="block text-right text-xs">{formatDate(post.date)}</time>
            {userRole === "admin" && (
                <div>
                    <button className="px-3" onClick={handleModifyPost}>📝</button>
                    <button className="px-3" onClick={handleRemovePost}>🗑️</button>
                </div>
            )}

            {user && user.role === "regular" && (
                <div className="flex">
                    <button className="px-3" onClick={handleCommentPost}>Comentar</button>
                </div>
            )}

            <ToggleLikeButton  onClick={handleToggleLikePost} isLiked={isLiked} />
            {logic.isUserLoggedIn() && <CreateComment postId={post.id} onCommentCreated={handleCommentCreated} />}


            <div>
                {comments.map(comment => (
                    <div key={comment.id}>
                        {modifyComment.id !== comment.id && <div><p className= ' text-green-600'>{comment.author.name + ' ' + comment.author.surname} </p><p>{comment.text}</p></div>}
                        {modifyComment.id === comment.id &&
                            <div className="flex flex-row justify-center gap-1 ">
                                <form onSubmit={handleModifyComment} className="flex flex-row gap-1">
                                    <input
                                        id='text'
                                        type="text"
                                        placeholder="edit text"
                                        defaultValue={modifyComment.text}
                                        onChange={(e) => setModifyComment({ ...modifyComment, text: e.target.value })}
                                    />
                                    <button type="submit">Modificar</button>
                                </form>
                                <button onClick={handleCancelModify}>Cancel</button>
                            </div>
                        }
                        {logic.isUserLoggedIn() && comment.author.id === userId && <div>
                            <button onClick={() => handleEditComment(comment.id, comment.text)}>✏</button>
                            <button onClick={() => handleRemoveComment(comment.id)}>🗑️</button>
                        </div>
                        }
                    </div>


                ))}


            </div>
        </article>
    )
}
export default Post