import logic from "../logic";

function createMeasurement({ onCancelClick, onMeasurementCreated }) {
    const handleCancelClick = () => onCancelClick

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const date = form.date.value
        const weight = form.weight.value
        const torso = form.torso.value
        const legs = form.legs.value

        try {
            logic.createMeasurement(date, weight, torso, legs)
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
        <section className="">
            <h2 className="">Create Mesure</h2>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="date">date</label>
                <input className="border-b-2 border-black" type="date" id="date" />

                <label htmlFor="weight">weight</label>
                <input className="border-b-2 border-black" type="number" id="weight" />

                <label htmlFor="Torso">Torso</label>
                <input className="border-b-2 border-black" type="number" id="Torso" />

                <label htmlFor="legs">legs</label>
                <input className="border-b-2 border-black" type="number" id="legs" />


                <button className="rounded-xl" type="submit">Create</button>
            </form>
            <button className="" onClick={handleCancelClick}>Cancel</button>
        </section>
    );
}

export default createMeasurement




















// import { errors } from "com"
// import logic from "../logic"

// function createMeasurement(date, weight, torso, legs) {
//     const handleCancelClick = () => onCancelClick()

//     const handleSubmit = event => {
//         event.preventDefault()

//         const form = event.target

//         const date = form.date.value
//         const weight = form.weight.value
//         const torso = form.torso.value
//         const legs = form.legs.value

//         try {
//             logic.createMeasurement(date, weight, torso, legs)
//                 .then(() => onMeasurementCreated())
//                 .catch(error => {
//                     console.error(error)

//                     alert(error.message)
//                 })
//         } catch (error) {
//             console.error(error)

//             alert(error.message)
//         }
//     }


//     const [measurements, setMeasurements] = useState([]);


//     const [formData, setFormData] = useState({
//         date: '',
//         weight: '',
//         torso: '',
//         legs: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     }

//     const handleAddMeasurement = () => {
//         const newMeasurement = {
//             date: formData.date,
//             weight: formData.weight,
//             torso: formData.torso,
//             legs: formData.legs
//         };
//         setMeasurements([...measurements, newMeasurement]);

//         // Con esto se limpian los campos del formulario después de agregar una medida
//         setFormData({
//             date: '',
//             weight: '',
//             torso: '',
//             legs: ''
//         });
//     }

//     return (
//         <div className='mt-20 flex justify-center'>
//             <div className="w-1 /2 pl-4">
//                 <h2 className="text-2xl font-bold mb-4">Measurements</h2>
//                 <form onSubmit={(e) => { e.preventDefault(); handleAddMeasurement(); }}>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
//                             Date
//                         </label>
//                         <input
//                             type="date"
//                             id="date"
//                             name="date"
//                             value={formData.date}
//                             onChange={handleChange}
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
//                             Weight in KG
//                         </label>
//                         <input
//                             type="number"
//                             id="weight"
//                             name="weight"
//                             value={formData.weight}
//                             onChange={handleChange}
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="torso">
//                             Torso in cm
//                         </label>
//                         <input
//                             type="number"
//                             id="torso"
//                             name="torso"
//                             value={formData.torso}
//                             onChange={handleChange}
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                             required
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="legs">
//                             Legs in cm
//                         </label>
//                         <input
//                             type="number"
//                             id="legs"
//                             name="legs"
//                             value={formData.legs}
//                             onChange={handleChange}
//                             className="border border-gray-300 rounded-md px-4 py-2 w-full"
//                             required
//                         />
//                     </div>

//                     {/* mi boton para enviar el formulario */}
//                     <button
//                         type="submit"
//                         className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     >
//                         Add Measurement
//                     </button>
//                 </form>
//             </div>

//             <div className="w-1/2">
//                 {/* Mi lista de medidas*/}

//                 <ul className="list-disc pl-6 mb-8">
//                     {measurements.map((measurement, index) => (
//                         <li key={index} className="text-lg">{measurement.date} - Weight: {measurement.weight} kg, Torso: {measurement.torso} cm, Legs: {measurement.legs} cm</li>
//                     ))}
//                 </ul>

//             </div>

//         </div>
//     );


// }

// console.debug('CREATE MEASUREMENT RENDER💀')

// export default createMeasurement
