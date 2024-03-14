document.addEventListener('keydown', function(event) {
    const eyeSize = 60; // Tamaño del ojo
    const eyeMargin = 10; // Margen del ojo
    const pupilSize = 20; // Tamaño de la pupila
    const eyeLeftLimit = eyeMargin + pupilSize / 2; // Límite izquierdo del ojo
    const eyeRightLimit = eyeSize - eyeMargin - pupilSize / 2; // Límite derecho del ojo
    
    // Obtener las pupilas
    const leftPupil = document.querySelector('.left-eye .pupil');
    const rightPupil = document.querySelector('.right-eye .pupil');
  
    // Obtener las posiciones actuales de las pupilas
    let leftPupilX = parseFloat(leftPupil.style.left) || 0;
    let rightPupilX = parseFloat(rightPupil.style.left) || 0;
  
    // Mover las pupilas hacia la derecha al presionar la flecha derecha
    if (event.key === 'ArrowRight') {
      if (leftPupilX < eyeRightLimit && rightPupilX < eyeRightLimit) {
        leftPupilX += 5; // Ajusta la velocidad de movimiento
        rightPupilX += 5; // Ajusta la velocidad de movimiento
      }
    }
    
    // Mover las pupilas hacia la izquierda al presionar la flecha izquierda
    if (event.key === 'ArrowLeft') {
      if (leftPupilX > eyeLeftLimit && rightPupilX > eyeLeftLimit) {
        leftPupilX -= 5; // Ajusta la velocidad de movimiento
        rightPupilX -= 5; // Ajusta la velocidad de movimiento
      }
    }
  
    // Aplicar las nuevas posiciones de las pupilas
    leftPupil.style.left = leftPupilX + 'px';
    rightPupil.style.left = rightPupilX + 'px';
  });