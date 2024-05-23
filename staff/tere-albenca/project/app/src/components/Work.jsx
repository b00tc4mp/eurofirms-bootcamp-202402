import { useState, useEffect } from 'react'
import logic from '../logic'
import { errors } from 'com'
import CreateComment from './CreateComment.jsx'

const { MatchError, ContentError } = errors

function Work({ work, onWorkRemoved, onWorkEdit, user, onUserProfileClick, isProfilePage }) {
    const [editWork, setEditWork] = useState(false)
    const [showCommentForm, setShowCommentForm] = useState(false)
    const [comments, setComments] = useState([])
    const [editComment, setEditComment] = useState({ id: '', text: '' })

    useEffect(() => {
        loadComments()
    }, [])

    const loadComments = () => {
        logic.retrieveComments(work.id)
            .then(comments => setComments(comments))
            .catch(error => console.error(error))
    }

    const handleProfileUserClick = () => {
        onUserProfileClick(work.author.id)
    }

    const handleRemoveWork = () => {
        try {
            if (confirm('delete work?'))
                logic.removeWork(work.id)
                    .then(() => onWorkRemoved())
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

    const handleUpdateWork = event => {
        try {
            event.preventDefault()
            const form = event.target
            const title = form.title.value
            const text = form.text.value

            logic.updateWork(work.id, title, text)

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
                    setEditWork(false)
                    onWorkEdit()
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
        setEditWork(true)
    }

    const handleCommentWork = () => {
        setShowCommentForm(!showCommentForm)
    }

    const handleCancelClick = () => {
        setEditWork(false);
        setEditComment({ id: '', text: '' })
    }

    const handleCommentCreated = () => {
        loadComments()
    }

    const handleUpdateComment = event => {
        event.preventDefault()
        try {
            logic.updateComment(work.id, editComment.id, editComment.text)
                .then(() => {
                    loadComments()
                    setEditComment({ id: '', text: '' })
                })
                .catch(error => {
                    console.error(error)
                    let feedback = error.message
                    if (error instanceof TypeError || error instanceof MatchError) {
                        feedback = `${feedback}, please verify credentials`
                    } else {
                        feedback = 'Sorry, there was an error. Please try again later.'
                    }
                    alert(feedback)
                });
        } catch (error) {
            console.error(error)
            let feedback = error.message
            if (error instanceof TypeError || error instanceof MatchError) {
                feedback = `${feedback}, please verify credentials`
            } else {
                feedback = 'Sorry, there was an error. Please try again later.'
            }
            alert(feedback);
        }
    }

    const handleEditComment = (commentId, commentText) => {
        setEditComment({ id: commentId, text: commentText })
    }

    const handleCancelEdit = () => {
        setEditComment({ id: '', text: '' })
    }

    const handleRemoveComment = (commentId) => {
        try {
            if (confirm('Delete comment?')) {
                logic.removeComment(work.id, commentId)
                    .then(() => {
                        // Actualizar 
                        loadComments()
                    })
                    .catch(error => {
                        console.error(error)

                        let feedback = error.message

                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                            feedback = `${feedback}, please correct it`
                        } else {
                            feedback = 'Sorry, there was an error, please try again later'
                        }

                        alert(feedback);
                    });
            }
        } catch (error) {
            console.error(error);

            let feedback = error.message;

            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                feedback = `${feedback}, please correct it`;
            } else {
                feedback = 'Sorry, there was an error, please try again later';
            }

            alert(feedback);
        }


    };

    return <article className='w-full'>
        <h3 className='font-bold cursor-pointer' onClick={handleProfileUserClick}>{work.author.name}</h3>
        <div className='w-[90%] flex flex-row justify-end items-end'>
            {(user && user.role === 'teacher' || user && user.id === work.author.id) &&
                <div className='flex flex-row justify-end'>
                    <div className='pr-1'>
                        <h4 className="font-bold">{work.title}</h4>
                    </div>
                    <div className='flex justify-end'>
                        <button className='px-1' onClick={handleRemoveWork}>🗑️</button>
                        <button className='px-1' onClick={handleShowForm}>✏️</button>
                    </div>
                </div>}
        </div>

        {editWork === true &&
            <div className='flex flex-row justify-center gap-1'>
                <form onSubmit={handleUpdateWork} className='flex flex-row gap-1'>
                    <input id='title' type='text' placeholder='Edit title' defaultValue={work.title}></input>
                    <input id='text' type='text' placeholder='Edit text' defaultValue={work.text}></input>
                    <button type='submit'>Update</button>
                </form>
                <button onClick={handleCancelClick} >Cancel</button>
            </div>
        }

        <img src={work.image} className='w-[90%]' alt={work.title} />
        <p>{work.text}</p>
        <time className='block text-right text-xs mb-[10px] mr-[5px]'>{work.date}</time>

        {(user && user.role === 'teacher') &&
            <div className='flex w-[70%] flex-row bg-[whitesmoke] rounded'>
                <div className=''>
                    <button className='px-3' onClick={handleCommentWork}>➕</button>
                </div>
            </div>
        }

        {comments.length > 0 && isProfilePage && user.role === 'student' && (
            <>
                <h4 className='font-bold'>Teacher comments</h4>
                <ul className="pl-8 w-[70%] bg-[whitesmoke] rounded">
                    {comments.map(comment => (
                        <li key={comment.id}>

                            <p className="pr-4">{comment.text}</p>
                        </li>
                    ))}
                </ul>
            </>
        )}

        <ul className="pl-8 w-[70%] bg-[whitesmoke] rounded">
            {showCommentForm && <CreateComment workId={work.id} onCommentCreated={handleCommentCreated} />}
            {comments.map(comment => (
                <li key={comment.id}>
                    {user && user.role === "teacher" && (
                        <div className="flex flex-row">
                            <p className="pr-4">{comment.text}</p>
                            <button onClick={() => handleRemoveComment(comment.id)}>🗑️</button>
                            <button onClick={() => handleEditComment(comment.id, comment.text)}>✏️</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>

    </article>
}

export default Work
