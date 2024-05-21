import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import logic from '../logic'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

function MeasurementsChart({ measurements }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (measurements.length) {
            // Invertir el orden de las medidas
            const reversedMeasurements = measurements.slice().reverse()

            const labels = reversedMeasurements.map(measure => new Date(measure.date).toLocaleDateString())
            const weightData = reversedMeasurements.map(measure => measure.weight)
            const torsoData = reversedMeasurements.map(measure => measure.torso)
            const legsData = reversedMeasurements.map(measure => measure.legs)

            setData({
                labels,
                datasets: [
                    {
                        label: 'Weight',
                        data: weightData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: false,
                    },
                    {
                        label: 'Torso',
                        data: torsoData,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        fill: false,
                    },
                    {
                        label: 'Legs',
                        data: legsData,
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        fill: false,
                    },
                ],
            })
        }
    }, [measurements])

    return (
        <div className="mt-8" style={{ background: 'black', padding: '20px', borderRadius: '10px' }}>
            {data ? (
                <Line
                    data={data}
                    options={{
                        scales: {
                            x: {
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)',
                                },
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                },
                            },
                            y: {
                                grid: {
                                    color: 'rgba(255, 255, 255, 0.2)',
                                },
                                ticks: {
                                    color: 'rgba(255, 255, 255, 0.7)',
                                },
                            },
                        },
                    }}
                />
            ) : (
                <p style={{ color: 'white' }}>Loading...</p>
            )}
        </div>
    )
}

export default MeasurementsChart
