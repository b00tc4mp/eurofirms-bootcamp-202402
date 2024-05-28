import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import logic from "../logic"
import Measurement from "./Measurement"
import CreateMeasurement from "./CreateMeasurement"
import MeasurementsChart from "./MeasurementsChart"
import TraineesMeasurements from "./TraineesMeasurements"

function Measurements({ refreshStamp }) {
    console.log('refreshStamp 💀', refreshStamp)

    const [measurements, setMeasurements] = useState([])
    const [creatingMeasurement, setCreatingMeasurement] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const userRole = logic.getLoggedInUserRole()

    const startDate = searchParams.get('startDate')
    const endDate = searchParams.get('endDate')

    const handleSearchMeasures = (event) => {
        event.preventDefault()
        const startDateValue = event.target.startDate.value
        const endDateValue = event.target.endDate.value

        setSearchParams({ startDate: startDateValue, endDate: endDateValue })
    }

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

    const searchMeasures = () => {
        try {
            logic.searchMeasurements(startDate, endDate)
                .then(measures => setMeasurements(measures))
                .catch(error => {
                    console.log(error)
                    alert(error.message)
                })
        } catch (error) {
            console.log(error)
            alert(error.message)
        }
    }

    useEffect(() => {
        if (startDate && endDate) {
            searchMeasures()
        } else {
            refreshMeasurements()
        }
    }, [refreshStamp, startDate, endDate])

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

            {userRole === 'trainee' && (
                <div>
                    <form className='mt-20' onSubmit={handleSearchMeasures}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="startDate" className="text-sm">Start Date:</label>
                            <input
                                id="startDate"
                                name="startDate"
                                type="date"
                                className="border border-gray-500 rounded-md px-4 py-2"
                                placeholder="Start Date"
                            />
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <label htmlFor="endDate" className="text-sm">End Date:</label>
                            <input
                                id="endDate"
                                name="endDate"
                                type="date"
                                className="border border-gray-500 rounded-md px-4 py-2"
                                placeholder="End Date"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4"
                        >
                            Search
                        </button>
                    </form>

                    <div className="w-full mt-8">
                        <MeasurementsChart measurements={measurements.toReversed()} />
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
                </div>
            )}

            {userRole === 'trainer' && <TraineesMeasurements />}

        </section>
    )
}

export default Measurements
