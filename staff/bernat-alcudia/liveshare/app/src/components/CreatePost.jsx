import logic from "../logic";

function CreatePost({ onCancelClick, onPostCreated }) {
    const handleCancelClick = () => onCancelClick()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const image = form.image.value
        const text = form.text.value

        try {
            logic.createPost(image, text)
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

    return <section className="mb-12 fixed bottom-0 left-0 bg-white w-full pb-2 border-black flex flex-col box-border px-2">
        <h2 className="font-bold text-xl py-2">Create Post</h2>

        <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
            <label htmlFor="image">image</label>
            <input className="border-b-2 border-black" type="text" id="image" />

            <label htmlFor="text">text</label>
            <input className="border-b-2 border black" type="text" id="text" />


            <button className="rounded-xl border-2 border-black px3 self-end" type="submit">Create</button>

        </form>
        <button onClick={handleCancelClick} className="rounded-xl border-2 border-slate-300 mx-auto px-3">Cancel</button>

    </section>
}

export default CreatePost