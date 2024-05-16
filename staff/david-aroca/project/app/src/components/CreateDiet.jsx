import logic from "../logic";

function CreateDiet({ onCancelClick, onDietCreated }) {

    const handleCancelClick = () => onCancelClick();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const image = form.image.value;
        const video = form.video.value;
        const description = form.description.value;

        try {
            logic.createDiet(title, image, video, description)
                .then(() => onDietCreated())
                .catch(error => {
                    console.log(error);
                    alert(error.message);
                });
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    }

    return (
        <section className="">
            <h2 className="">Create Diet</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input className="border-b-2 border-black" type="text" id="title" />

                <label htmlFor="image">Image</label>
                <input className="border-b-2 border-black" type="text" id="image" />

                <label htmlFor="video">Video</label>
                <input className="border-b-2 border-black" type="text" id="video" />

                <label htmlFor="description">Description</label>
                <input className="border-b-2 border-black" type="text" id="description" />

                <button className="rounded-xl" type="submit">Create</button>
            </form>
            <button className="" onClick={handleCancelClick}>Cancel</button>
        </section>
    );
}

export default CreateDiet;
