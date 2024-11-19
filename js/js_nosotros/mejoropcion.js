

    document.getElementById('careerForm').addEventListener('submit', function(e) {
      e.preventDefault();
 
      const nombre = document.querySelector('input[name="Nombre"]').value;
      const apellido = document.querySelector('input[name="Apellido"]').value;
      const email = document.querySelector('input[name="email"]').value;
  
      const respuestas = [
        parseInt(document.querySelector('input[name="pregunta1"]').value),
        parseInt(document.querySelector('input[name="pregunta2"]').value),
        parseInt(document.querySelector('input[name="pregunta3"]').value),
        parseInt(document.querySelector('input[name="pregunta4"]').value),
        parseInt(document.querySelector('input[name="pregunta5"]').value),
        parseInt(document.querySelector('input[name="pregunta6"]').value),
        parseInt(document.querySelector('input[name="pregunta7"]').value),
        parseInt(document.querySelector('input[name="pregunta8"]').value),
        parseInt(document.querySelector('input[name="pregunta9"]').value),
        parseInt(document.querySelector('input[name="pregunta10"]').value)
      ];
  
      const total = respuestas.reduce((acc, curr) => acc + curr, 0);
        let carrera = '';
  
      if (total >= 80) {
        carrera = 'Programación';
      } else if (total >= 70) {
        carrera = 'Mecatrónica';
      } else if (total >= 60) {
        carrera = 'Mecánica Industrial';
      } else if (total >= 50) {
        carrera = 'Inteligencia Artificial';
      } else if (total >= 40) {
        carrera = 'Laboratorista Químico';
      } else if (total >= 30) {
        carrera = 'Contabilidad';
      } else {
        carrera = 'Soporte y Mantenimiento';
      }
  
      window.location.href = `resultado-carrera.html?nombre=${nombre}&apellido=${apellido}&carrera=${carrera}`;
    });
