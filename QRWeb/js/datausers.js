fetch('http://192.168.100.7:3000/api/v3.4/acces/users/')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la respuesta: ${response.status}`);
    }
    return response.json(); // Convierte la respuesta en JSON
  })
  .then(data => {
    console.log(data); // Muestra los datos en la consola
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
