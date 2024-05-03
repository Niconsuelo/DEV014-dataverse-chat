//Aquí elaborar la lógica relativa a la IA.

// src/lib/openAIApi.js

//con la configracion de este archivo, chatGPT va a recibir el mensaje y además va a responder

//necesitamos una apikey para usar el chat gpt, getApikey me servirá para esto
// Devuelve una clave API necesaria para autenticar las solicitudes a OpenAI.
import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (messages) => {
  console.log("Inicio de la solicitud fetch");

  //almacenamiento de apikey
  const apiKey = "tu_clave_api_aqui";

  //utiliza post (acepta un objeto de datos)
  //post: enviar datos
  const postData = {
    //objeto que contiene la especificación del modelo y los mensajes que se van a enviar a la API de OpenAI.
    model: "gpt-3.5-turbo", // Asegúrate de usar un modelo válido, esto depende para que lo vamos a
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Hola" },
    ],
  };
  //el try, intenta ejecutar las siquientes acciones, sin errores.
  try {
    // Realiza una solicitud HTTP POST(crea, acepta objeto de datos) esperando la respuesta antes de continuar (await)
    // La URL de await fetch, es el endpoint al que se hace la solicitud
    const response = await fetch("url de chat openAI", {
      //await espera que termine de ejecutar la funcion  //fetch es asincrono, porque va a buscar a una fuente externa
      //las asincronas siguen de largo, no esperan --> sincronas, si esperan que se ejecute cada linea

      method: "POST", // especifica método HTTP para enviar datos: POST
      headers: {
        "Content-Type": "application/json", // Indicamos que el contenido es JSON
        Authorization: `Bearer ${apiKey}`, //
      },
      //json es un objeto (tipo de formato de dato)
      //body, es el cuerpo de la solicitud. OpenAI acepta formatoJSON.
      body: JSON.stringify(postData), // Convierte el objeto postData a una cadena JSON para enviarlo en el cuerpo de la solicitud
    });
    //Verifica si la respuesta HTTP es exitosa (response.ok). Si no es así, lanza un error con el estado HTTP.
    if (!response.ok) {
        //throw captura la excepcion 
        //mensaje de error personalizado que se almacenará en la propiedad message del objeto de error.
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json(); // Esperamos a que la respuesta se convierta a JSON
    console.log("Datos recibidos:", responseData); // Mostramos los datos recibidos

    //Catch captura y maneja cualquier error que podría haber ocurrido durante la solicitud fetch
  } catch (error) {
    // Imprime el error en la consola si algo sale mal durante la solicitud fetch o la conversión de datos
    console.error("Error al hacer fetch:", error); // Manejo de errores de la solicitud
  }

  console.log("La solicitud fetch ha sido completada");
};
