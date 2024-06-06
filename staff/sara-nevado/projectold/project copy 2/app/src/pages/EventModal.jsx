import React, { useState, useEffect } from 'react'

const EventModal = ({ isOpen, onClose, onSave, event = null }) => {
  const [type, setType] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')

  const isEditMode = event !== null

  useEffect(() => {
    if (isEditMode) {
      setType(event.type || '')
      setTitle(event.title || '')
      setDate(event.date ? new Date(event.date).toISOString().substring(0, 16) : '')
      setDuration(event.duration || '')
      setAddress(event.address || '')
      setDescription(event.description || '')
    } else {
      resetForm()
    }
  }, [event, isEditMode])

  const resetForm = () => {
    setType('')
    setTitle('')
    setDate('')
    setDuration('')
    setAddress('')
    setDescription('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formattedDate = new Date(date).toISOString()
    if (!duration || isNaN(Number(duration))) {
      console.error('Error: Duration must be a valid number')
      return
    }

    try {
      await onSave({ type, title, date: formattedDate, duration: Number(duration), address, description })
      onClose()
    } catch (error) {
      console.error('Error saving event:', error.message)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg mb-3 font-bold text-pink-600">{isEditMode ? 'Editar Evento' : 'Crear Evento'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="type" className="block text-white">Tipo</label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="event">Evento</option>
              <option value="training">Entrenamiento</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="block text-white">Título</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="block text-white">Fecha</label>
            <input
              id="date"
              type="datetime-local"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duration" className="block text-white">Duración (horas)</label>
            <input
              id="duration"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="block text-white">Dirección</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="block text-white">Descripción</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-2 py-1 border rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500 bg-gray-700 text-white"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 px-3 py-1 bg-red-600 text-white rounded shadow hover:bg-red-500">
              Cancel
            </button>
            <button type="submit" className="px-3 py-1 bg-pink-500 text-white rounded shadow hover:bg-pink-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EventModal


