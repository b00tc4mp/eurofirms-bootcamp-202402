import { useState, useEffect } from "react"
import logic from "../logic"
import { errors } from 'com'
import CreateComment from './CreateComment.jsx'

const { MatchError, ContentError } = errors

function Work({ work, onWorkRemoved, onWorkEdit , onCommentUpdated, user,  onProfileClick }) {

    const [editWork, setEditWork] = useState(false)
    const [showCommentForm, setShowCommentForm] = useState(false)
    const[comments,setComments]= useState([])
    const [editComment, setEditComment] = useState({ id: '', text: '' });

    useEffect(() => {
        loadComments();
    }, []);

    const loadComments = () => {
        logic.retrieveComments(work.id)
            .then(comments => setComments(comments))
            .catch(error => console.error(error));
    }

    const handleProfileClick = () => {
        onProfileClick(work.author.id);
    };

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
            const title=form.title.value
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
        setEditComment({ id: '', text: '' });
    } 

    const handleCommentCreated = () => {
        loadComments()
    }

    const handleUpdateComment = (event) => {
        event.preventDefault()
        try {
            logic.updateComment(work.id, editComment.id, editComment.text)
                .then(() => {
                    loadComments()
                    onCommentUpdated()
                    setEditComment({ id: '', text: '' });
                })
                .catch(error => {
                    console.error(error)
                    let feedback = error.message
                    if (error instanceof TypeError || error instanceof MatchError) {
                        feedback = `${feedback}, please verify credentials`
                    } else {
                        feedback = 'Sorry, there was an error. Please try again later.'
                    }
                    alert(feedback);
                });
        } catch (error) {
            console.error(error);
            let feedback = error.message;
            if (error instanceof TypeError || error instanceof MatchError) {
                feedback = `${feedback}, please verify credentials`;
            } else {
                feedback = 'Sorry, there was an error. Please try again later.';
            }
            alert(feedback);
        }
    };

    const handleEditComment = (commentId, commentText) => {
        setEditComment({ id: commentId, text: commentText });
    };

    const handleCancelEdit = () => {
        setEditComment({ id: '', text: '' });
    };

    const handleRemoveComment = (commentId) => {
    try {
        if (confirm('Delete comment?')) {
            logic.removeComment(work.id, commentId)
                .then(() => {
                    // Actualizar la lista de comentarios después de eliminar el comentario
                    loadComments();
                })
                .catch(error => {
                    console.error(error);

                    let feedback = error.message;

                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {
                        feedback = `${feedback}, please correct it`;
                    } else {
                        feedback = 'Sorry, there was an error, please try again later';
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

    return <article className="w-[100%]">
        <h3 className="font-bold cursor-pointer" onClick={handleProfileClick}>{work.author.name}</h3>
        <h4 className="">{work.title}</h4>
        <img src={work.image} className='w-[80%]' />
        <p>{work.text}</p>
        <time className="block text-right text-xs mb-[10px] mr-[5px]">{work.date}</time>
        {(user && user.role === "teacher" || user && user.id === work.author.id) && 
        <div className="flex flex-row">
        <button className="px-3" onClick={handleRemoveWork}>🗑️</button>
        <button className="px-3" onClick={handleShowForm}>✍️</button>
        </div>}
        
        {editWork === true &&
            <div className="flex flex-row justify-center gap-1 ">
                <form onSubmit={handleUpdateWork} className="flex flex-row gap-1">
                    <input id='title' type="text" placeholder="edit title"></input>
                    <input id='text' type="text" placeholder="edit text"></input>
                    <button type="submit">Update</button>
                </form>
                <button onClick={handleCancelClick} >Cancel</button>
            </div>
        }

        {user && user.role === "teacher" && (
            <div className="flex">
                <button className="px-3" onClick={handleCommentWork}>comment</button>
            </div>
        )}

        {showCommentForm && <CreateComment workId={work.id} onCommentCreated={handleCommentCreated} />}        
        <div>
            {comments.map(comment => (
                <div key={comment.id}>
                    {user && user.role === "teacher" && (
                        <div>
                            <p>{comment.text}</p>
                            <button onClick={() => handleEditComment(comment.id, comment.text)}>✍️</button>
                            <button onClick={() => handleRemoveComment(comment.id)}>🗑️</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
        
        {editComment.id &&
            <div className="flex flex-row justify-center gap-1 ">
                <form onSubmit={handleUpdateComment} className="flex flex-row gap-1">
                    <input
                        id='text'
                        type="text"
                        placeholder="edit text"
                        value={editComment.text}
                        onChange={(e) => setEditComment({ ...editComment, text: e.target.value })}
                    />
                    <button type="submit">Update</button>
                </form>
                <button onClick={handleCancelEdit}>Cancel</button>
            </div>
        }
    </article>
}

export default Work
    