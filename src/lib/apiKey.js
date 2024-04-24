export const setApiKey = (key) => {
  //guardar la key y value en localstorage
  localStorage.setItem("api-key", key);

  // Implementa el código para guardar la API KEY en Local Storage
  //Escribir el código que haya que la API key se guarde en localStorage
  //El button va a llamar a esta función, la cual se va a ejecutar en el localStorage

  //1. Acceder al local Storage
  //2. Aplicar método Storage.getItem? o cuál otro?
  //3. Al método pasarle el parámetro key que es el valor del input
  //4. Continuará....
  return null;
};

export const getApiKey = () => {
  // traer el valor guardado en localstorage

  const apiKey = localStorage.getItem("api-key");

  // Implementa el código para obtener la API KEY desde Local Storage
  //necesito retornar el valor, que me lo entregue.
  return apiKey;
};