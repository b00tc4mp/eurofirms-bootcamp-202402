import logic from '../logic'

function CreatePost({ onCancelClick, onPostCreated }) {
    const handleCancelClick = () => onCancelClick()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target
        const title = form.title.value
        const image = form.image.value
        const video = form.video.value
        const text = form.text.value


        try {
            logic.createPost(title, image, video, text)
                .then(() => onPostCreated())
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }

    console.debug('CreatePost render')

    return (
        <section className=" bg-green-100 fixed bottom-0 left-0 w-full border-t-2 border-black pb-2 px-2">
            <h2 className="font-bold text-xl py-2">Create Post</h2>
            <form className="flex flex-col gap-2 mb-12" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input className="border-b-2 border-black" type="text" id="title" />
                <label htmlFor="image">Image</label>
                <input className="border-b-2 border-black" type="url" id="image" />
                <label htmlFor="video">Video</label>
                <input className="border-b-2 border-black" type="url" id="video" />
                <label htmlFor="text">Text</label>
                <input className="border-b-2 border-black" type="text" id="text" />
                <button className="rounded-xl border-2 border-black px-3 self-center" type="submit">Create</button>
                <button className=" rounded-xl border-2  border-black px-3 self-center" onClick={handleCancelClick}>Cancel</button>
            </form>
           
        </section>
    )
}

export default CreatePost
