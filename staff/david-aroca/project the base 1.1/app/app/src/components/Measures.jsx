import React, { useState } from 'react'

function Measure() {
    const [measurements, setMeasurements] = useState([]);

    const handleAddMeasurement = () => {

    }

    return (
        <div>
            <h2>Measurements</h2>
            <ul>
                {measurements.map((measurement, index) => (
                    <li key={index}>{measurement}</li>
                ))}
            </ul>
            <button onClick={handleAddMeasurement}>Add Measurement</button>
        </div>
    )
}

export default measures
