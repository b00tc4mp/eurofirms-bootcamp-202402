import { useState } from "react"
import logic from "../logic"

function Post({ post, onPostDeleted, onPostModified }) {
   const [modify, setModify] = useState(false)

    const handleDeletePost = () => {
        try {
            if (window.confirm('Delete post?')) {
                logic.deletePost(post.id)
                    .then(() => onPostDeleted())
                    .catch(error => {
                        console.error(error)

                        alert(error.message)
                    })
            }
        } catch (error) {
            console.error(error)

            alert(error.message)
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

        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('Post render')

    return <article className="w-full border border-gray-200 rounded-md p-4 shadow-md">
          <h3 className="font-bold text-xl mb-2">{post.author.username}</h3>
          <img src={post.image} className="w-full rounded-md mb-4" alt="Post" />
          {!modify && <p className="text-gray-700">{post.text}</p>}
          {modify && ( <form onSubmit={handleModifySubmit} className="mb-4">
              <input type="text" defaultValue={post.text} name="text" className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600" type="submit">Guardar</button>
            </form>
          )}
          <time className="block text-right text-xs text-gray-500">{post.date}</time>
          {post.author.id === logic.getLoggedInUserId() && (
            <div className="mt-4">
              <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600" onClick={handleDeletePost}>Eliminar</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" onClick={handleModifyPost}>Modificar</button>
            </div>
          )}
        </article>
    
      
}
export default Post
