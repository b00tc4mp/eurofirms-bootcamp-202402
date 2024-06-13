import React from 'react'

const Gallery = () => {
  const martialArtsImages = [
   
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg'
  ]

  return (
    <div className="bg-gray-200 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold text-white mb-8">Galería de imágenes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {martialArtsImages.map((imageUrl, index) => (
          <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            <img src={imageUrl} alt={`Arte marcial ${index + 1}`} className="w-full h-64 object-cover" />
            <div className="p-4">
              <p className="text-white text-lg mb-2">Arte Marcial {index + 1}</p>
              <a href={imageUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out">Ver en grande</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

//export default Gallery

