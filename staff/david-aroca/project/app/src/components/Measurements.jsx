import { useEffect, useState } from "react";

import logic from "../logic";

import Measurement from "./Measurement";

// TODO

function Measurements({ refreshStamp }) {
    console.log('refreshStamp 💀', refreshStamp)

    const [measurements, setMeasurements] = useState([])

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

    return <section className="flex flex-col gap-6 px-2 py-20">
        {measurements.map(measurement => (
            <Measurement key={measurement.id}
                measurement={measurement}
                onMeasurementRemoved={handleMeasurementRemoved}
                onMeasurementUpdated={handleMeasurementUpdated} />))}
    </section>

}

export default Measurements;

