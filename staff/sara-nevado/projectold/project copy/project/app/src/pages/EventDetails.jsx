import React, { useState } from 'react';

function EventDetails({ eventDetails, closeEventDetails }) {
  // Estado local para controlar si el evento está seleccionado
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = async () => {
    // Aquí deberías implementar la lógica para seleccionar el evento, p.ej. llamada a API
    setIsSelected(true);  // Actualiza el estado para mostrar el botón "Deseleccionar"
  };

  const handleDeselect = async () => {
    // Aquí deberías implementar la lógica para deseleccionar el evento, p.ej. llamada a API
    setIsSelected(false);  // Actualiza el estado para ocultar el botón "Deseleccionar"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg mb-3 font-bold text-pink-600">Detalles del Evento</h2>
        {/* Otros detalles del evento */}
        <p><strong>Tipo:</strong> {eventDetails.type}</p>
        <p><strong>Título:</strong> {eventDetails.title}</p>
        <p><strong>Fecha:</strong> {new Date(eventDetails.date).toLocaleString()}</p>
        <p><strong>Duración:</strong> {eventDetails.duration} horas</p>
        <p><strong>Dirección:</strong> {eventDetails.address}</p>
        <p><strong>Descripción:</strong> {eventDetails.description}</p>
        <p><strong>Seleccionado por:</strong> {eventDetails.subscribers.join(', ')}</p>
        <div className="flex justify-end mt-2">
          {!isSelected && (
            <button 
              onClick={handleSelect}
              className="px-3 py-1 bg-green-500 text-white rounded shadow hover:bg-green-400 font-bold"
            >
              Seleccionar
            </button>
          )}
          {isSelected && (
            <button 
              onClick={handleDeselect}
              className="px-3 py-1 bg-red-500 text-white rounded shadow hover:bg-red-400 font-bold"
            >
              Deseleccionar
            </button>
          )}
          <button 
            onClick={closeEventDetails} 
            className="ml-2 px-3 py-1 bg-gray-500 text-white rounded shadow hover:bg-gray-400 font-bold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;



