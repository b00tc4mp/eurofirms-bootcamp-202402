import React, { useState } from 'react'
import logic from '../logic'
import { errors } from 'com'

const { MatchError, ContentError } = errors

function Work({ work, onWorkRemoved, onWorkEdit, user, onUserProfileClick }) {
    const [editWork, setEditWork] = useState(false)

    const handleProfileUserClick = () => {
        onUserProfileClick(work.author.id)
    }

    const handleRemoveWork = () => {
        try {
            if (confirm('Delete work?')) {
                logic.removeWork(work.id)
                    .then(() => onWorkRemoved())
                    .catch(error => {
                        console.error(error)
                        let feedback = error.message
                        if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                            feedback = `${feedback}, please correct it`
                        else if (error instanceof MatchError)
                            feedback = `${feedback}, please verify credentials`
                        else
                            feedback = 'Sorry, there was an error, please try again later'
                        alert(feedback);
                    });
            }
        } catch (error) {
            console.error(error)
            let feedback = error.message
            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'Sorry, there was an error, please try again later'
            alert(feedback)
        }
    };

    const handleUpdateWork = event => {
        try {
            event.preventDefault()
            const form = event.target
            const title = form.title.value
            const text = form.text.value

            logic.updateWork(work.id, title, text)
                .then(() => {
                    setEditWork(false)
                    onWorkEdit()
                })
                .catch(error => {
                    console.error(error)
                    let feedback = error.message
                    if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                        feedback = `${feedback}, please correct it`
                    else if (error instanceof MatchError)
                        feedback = `${feedback}, please verify credentials`
                    else
                        feedback = 'Sorry, there was an error, please try again later'
                    alert(feedback)
                });
        } catch (error) {
            console.error(error)
            let feedback = error.message
            if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                feedback = `${feedback}, please correct it`
            else
                feedback = 'Sorry, there was an error, please try again later'
            alert(feedback)
        }
    }

    const handleShowForm = () => {
        setEditWork(true)
    }

    const handleCancelClick = () => {
        setEditWork(false)
    }

    return (
        <article className="w-full bg-white rounded-lg shadow-md p-4 mb-4">
            <h3 className="font-bold text-lg text-blue-400 cursor-pointer hover:text-blue-700" onClick={handleProfileUserClick}>{work.author.name}</h3>
            <div className="w-[90%] flex flex-row justify-between items-center mt-2">
                <h4 className="font-bold text-xl">{work.title}</h4>
                {(user && user.role === 'teacher') || (user && user.id === work.author.id) ? (
                    <div className="flex space-x-2">
                        <button className="px-1.5 py-0.5 bg-gray-200 rounded-md text-sm shadow-md hover:bg-gray-300 hover:shadow-lg active:bg-gray-400 active:shadow-xl transition-all duration-200" onClick={handleShowForm}>✏️</button>
                        <button className="px-1.5 py-0.5 bg-gray-200 rounded-md text-white text-l font-bold shadow-md hover:bg-gray-300 hover:shadow-lg active:bg-gray-400 active:shadow-xl transition-all duration-200" onClick={handleRemoveWork}>❌</button>

                    </div>
                ) : null}
            </div>

            {editWork && (
                <div className="mt-2">
                    <form onSubmit={handleUpdateWork} className="flex flex-col space-y-2">
                        <input id="title" type="text" placeholder="Edit title" defaultValue={work.title} className="px-2 py-1 border rounded-md" />
                        <input id="text" type="text" placeholder="Edit text" defaultValue={work.text} className="px-2 py-1 border rounded-md" />
                        <div className="flex space-x-1">
                            <button type="submit" className="px-2 py-0.5 bg-gray-200 rounded-md  text-white text-sm shadow-md hover:bg-gray-300 hover:shadow-lg active:bg-gray-400 active:shadow-xl transition-all duration-200"> ok</button>
                            <button type="button" className="px-1.5 py-0.5 bg-gray-200 rounded-md text-l font-bold shadow-md hover:bg-gray-300 hover:shadow-lg active:bg-gray-400 active:shadow-xl transition-all duration-200" onClick={handleCancelClick}>✖️</button>
                        </div>
                    </form>
                </div>
            )}

            <img src={work.image} className="w-[90%] rounded-lg mt-4" alt={work.title} />
            <p className="mt-2 text-gray-700">{work.text}</p>
            <time className="block text-right text-xs text-gray-500 mt-2">{work.date}</time>
        </article>
    );
}

export default Work