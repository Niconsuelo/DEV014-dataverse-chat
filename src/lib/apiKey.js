export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  //Escribir el código que haya que la API key se guarde en localStorage
  //El button va a llamar a esta función, la cual se va a ejecutar en el localStorage

  //1. Acceder al local Storage
  //2. Aplicar método Storage.setItem?
  //3. Al método pasarle el parámetro key que es el valor del input
  //4. Para este método no necesitamos retornar nada, sólo guardar.
  localStorage.setItem('api-input', key); // 'api-input' es la key y 'key' es el value
  
  return null; // *** ESTE RETURN LO AGREGAMOS NETAMENTE PARA FUNCIONAMIENTO DE TEST ***
};

export const getApiKey = () => {
  // Implementa el código para obtener la API KEY desde Local Storage
  const gettingApiKey = localStorage.getItem('api-input') // este parámetro debe ser la key (en este caso, 'api-input')
  // En este caso, si necesitamos retornar algo (por algo estamos 'yendo a buscar' la key)
  return gettingApiKey;
};