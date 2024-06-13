import React from 'react';

function EventDetails({ eventDetails, closeEventDetails }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-lg mb-3 font-bold text-pink-600">Details</h2>
        <p><strong>Tipo:</strong> {eventDetails.type}</p>
        <p><strong>Título:</strong> {eventDetails.title}</p>
        <p><strong>Fecha:</strong> {new Date(eventDetails.date).toLocaleString()}</p>
        <p><strong>Duración:</strong> {eventDetails.duration} horas</p>
        <p><strong>Dirección:</strong> {eventDetails.address}</p>
        <p><strong>Descripción:</strong> {eventDetails.description}</p>
        <div className="flex justify-end mt-2">
          <button 
            onClick={closeEventDetails} 
            className="px-3 py-1 bg-gray-500 text-white rounded shadow hover:bg-gray-400 font-bold"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;

