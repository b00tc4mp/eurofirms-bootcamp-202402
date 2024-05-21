import { useEffect, useState } from "react"
import logic from "../logic"
import Measurement from "./Measurement"
import CreateMeasurement from "./CreateMesurement"
import SearchMeasure from "./SearchMeasure"
import MeasurementsChart from "./MesurementsChart"

function Measurements({ refreshStamp }) {
    console.log('refreshStamp 💀', refreshStamp)

    const [measurements, setMeasurements] = useState([])
    const [creatingMeasurement, setCreatingMeasurement] = useState(false)

    const refreshMeasurements = () => {
        try {
            logic.retrieveMeasurements()
                .then(measurements => setMeasurements(measurements))
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    useEffect(() => {
        refreshMeasurements()
    }, [refreshStamp])

    const handleMeasurementRemoved = () => refreshMeasurements()

    const handleMeasurementUpdated = () => refreshMeasurements()

    const handleCancelCreateMeasurement = () => setCreatingMeasurement(false)

    const handleMeasurementCreated = () => {
        setCreatingMeasurement(false)
        refreshMeasurements()
    }

    return (
        <section className="flex flex-col gap-6 px-2 py-20">
            {creatingMeasurement ? (
                <CreateMeasurement
                    onCancelClick={handleCancelCreateMeasurement}
                    onMeasurementCreated={handleMeasurementCreated}
                />
            ) : (
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => setCreatingMeasurement(true)}
                >
                    Create New Measurement
                </button>
            )}
            <SearchMeasure />
            <div className="w-full">
                <MeasurementsChart measurements={measurements} />
            </div>
            <div className="w-full mt-8 grid grid-cols-2 gap-4">
                {measurements.map(measurement => (
                    <Measurement
                        key={measurement.id}
                        measurement={measurement}
                        onMeasurementRemoved={handleMeasurementRemoved}
                        onMeasurementUpdated={handleMeasurementUpdated}
                    />
                ))}
            </div>
        </section>
    )
}

export default Measurements
