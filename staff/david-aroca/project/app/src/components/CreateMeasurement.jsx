import logic from "../logic"

function CreateMeasurements({ onCancelClick, onMeasurementCreated }) {
    const handleCancelClick = () => onCancelClick()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const date = form.date.value
        const weight = form.weight.value
        const torso = form.torso.value
        const legs = form.legs.value

        try {
            logic.createMeasurement(date, +weight, +torso, +legs)
                .then(() => onMeasurementCreated())
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    console.debug('CREATEMEASURE RENDER☠')

    return (
        <section className="bg-slate-500 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Create Measurement</h2>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block font-medium mb-1" htmlFor="date">Date</label>
                    <input className="w-full p-2 border-2 border-gray-300 rounded" type="date" id="date" name="date" />
                </div>
                <div>
                    <label className="block font-medium mb-1" htmlFor="weight">Weight</label>
                    <input className="w-full p-2 border-2 border-gray-300 rounded" type="number" id="weight" name="weight" />
                </div>
                <div>
                    <label className="block font-medium mb-1" htmlFor="torso">Torso</label>
                    <input className="w-full p-2 border-2 border-gray-300 rounded" type="number" id="torso" name="torso" />
                </div>
                <div>
                    <label className="block font-medium mb-1" htmlFor="legs">Legs</label>
                    <input className="w-full p-2 border-2 border-gray-300 rounded" type="number" id="legs" name="legs" />
                </div>
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200" type="submit">Create</button>
            </form>
            <button className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition duration-200" onClick={handleCancelClick}>Cancel</button>
        </section>
    )
}

export default CreateMeasurements
