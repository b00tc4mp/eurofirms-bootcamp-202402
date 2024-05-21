import React, { useState } from 'react'


function CalorieCalculator() {
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [gender, setGender] = useState('male')
    const [activityLevel, setActivityLevel] = useState('')
    const [calories, setCalories] = useState(null)

    const handleCalculateCalories = () => {
        let basicCalories

        if (gender === 'male') {
            basicCalories = 10 * weight + 6.25 * height - 5 * age + 5
        } else {
            basicCalories = 10 * weight + 6.25 * height - 5 * age - 161
        }

        let adjustedCalories

        switch (activityLevel) {
            case 'sedentary':
                adjustedCalories = basicCalories * 1.2
                break
            case 'light':
                adjustedCalories = basicCalories * 1.375
                break
            case 'moderate':
                adjustedCalories = basicCalories * 1.55
                break
            case 'active':
                adjustedCalories = basicCalories * 1.725
                break
            case 'very_active':
                adjustedCalories = basicCalories * 1.9
                break
            default:
                adjustedCalories = basicCalories
        }

        setCalories(adjustedCalories)
    }

    return (
        <div className="mt-8 mb-20 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Calorie Calculator</h2>
            <div className="flex justify-center items-center">
                <div className="w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                            Age (years)
                        </label>
                        <input
                            type="number"
                            id="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="height">
                            Height (cm)
                        </label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                            Weight (kg)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="border border-gray-300 rounded-md px-4 py-2 w-full"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <fieldset className="mb-4 border border-gray-300 rounded-md p-4">
                        <legend className="block text-gray-700 text-sm font-bold mb-2">Activity Level</legend>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    checked={activityLevel === 'sedentary'}
                                    onChange={() => setActivityLevel('sedentary')}
                                />
                                <span className="ml-2">Sedentary (little or no exercise)</span>
                                <img src="/person 1.png" alt="Sedentary" className="ml-4 h-12" />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    checked={activityLevel === 'light'}
                                    onChange={() => setActivityLevel('light')}
                                />
                                <span className="ml-2">Light (exercise 1-3 days a week)</span>
                                <img src="/planting.png" alt="Light" className="ml-4 h-12" />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    checked={activityLevel === 'moderate'}
                                    onChange={() => setActivityLevel('moderate')}
                                />
                                <span className="ml-2">Moderate (exercise 3-5 days a week)</span>
                                <img src="/walking.png" alt="Moderate" className="ml-4 h-12" />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    checked={activityLevel === 'active'}
                                    onChange={() => setActivityLevel('active')}
                                />
                                <span className="ml-2">Active (exercise 6-7 days a week)</span>
                                <img src="/runer.png" alt="Active" className="ml-4 h-12" />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    className="form-radio h-5 w-5 text-blue-600"
                                    checked={activityLevel === 'very_active'}
                                    onChange={() => setActivityLevel('very_active')}
                                />
                                <span className="ml-2">Very Active (very hard exercise/sports & physical job )</span>
                                <img src="swimming.png" alt="Very Active" className="ml-4 h-12" />
                            </div>
                        </div>
                    </fieldset>
                    <button
                        onClick={handleCalculateCalories}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Calculate Calories
                    </button>
                    {calories !== null && (
                        <div className="mt-4">
                            <p className="text-lg font-semibold">Estimated Daily Calories: {calories}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CalorieCalculator
