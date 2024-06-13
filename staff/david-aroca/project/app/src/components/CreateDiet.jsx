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
        <section className="bg-slate-500 p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Diet</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" type="text" id="title" />
                </div>

                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" type="text" id="image" />
                </div>

                <div>
                    <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video</label>
                    <input className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" type="text" id="video" />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500" rows="4" id="description" />
                </div>

                <div className="flex justify-between items-center">
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="submit">Create</button>
                    <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" onClick={handleCancelClick} type="button">Cancel</button>
                </div>
            </form>
        </section>
    );
}

export default CreateDiet;
