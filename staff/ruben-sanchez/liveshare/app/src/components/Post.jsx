import { useState } from 'react'
import { errors } from 'com'

import logic from '../logic'

const { ContentError, MatchError } = errors

function Post({post, onPostRemoved, onPostModified}) {
    const [modify,setModify] = useState(false)

    const handleRemovePost = () => {
      try {
        if (confirm('delete post?'))
            logic.removePost(post.id)
              .then(() => onPostRemoved())
              .catch(error => {
                  console.error(error)

                let feedback = error.message

                if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                  feedback = `${feedback}, please correct it`
                else if ( error instanceof MatchError)
                    feedback = `${feedback}, please verify credentials`
                else 
                  feedback = 'sorry , there was an error, please try again later'

                alert(feedback)
              })
      } catch (error){
          console.error(error)

          let feedback = error.message 

          if ( error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
              feedback = `${feedback}, please correct it`
          else 
              feedback = 'sorry, there was an error, please try again'

          alert(feedback)
      }
    }
    const handleModifyPost = () => setModify(true)

    const handleModifySubmit = event => {
      event.preventDefault()

      const form = event.target 

      const text = form.text.value 

      try {
        logic.modifyPost(post.id, text)
          .then(() => {
            onPostModified()

            setModify(false)
          })
          .catch(error => {
            console.error(error)

            alert(error.message)
          })
      } catch(error) {
        console.error(error)

        alert(error.message)
      }
     
    }

    return <article  className='w-full'>
      <h3 className='font-bold'>{post.author.username}</h3>
      <img src={post.image} className='w-full' /> 
      {!modify && <p>{post.text}</p>}
      {modify && <form onSubmit={handleModifySubmit}>
        <input type='text' defaultValue={post.text} name='text' />
        <button className='px-3' type="submit">✅</button>
      </form>}
      <time className='bloct text-right text-xs'>{post.date}</time>
      {post.author.id === logic.getLoggedInUserId() && <div>
           <button className='px-3' onClick={handleModifyPost}>📝</button>
           <button className='px-3' onClick={handleRemovePost}>🗑️</button>
        </div>}
      
      </article>
}

export default Post