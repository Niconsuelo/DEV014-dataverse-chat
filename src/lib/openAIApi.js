//Aquí elaborar la lógica relativa a la IA.

// src/lib/openAIApi.js

// Importa la función para obtener la API KEY desde apiKey.js
//necesitamos una apikey para usar el chat gpt, getApikey me servirá para esto
import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = async (messages) => {
  //Aquí es donde debes implementar la petición con fetch o axios

  //funcion asincrona

    console.log("Inicio de la solicitud fetch");

    //utilizar POST, no GET (estructura chatOpenAI).
    //Crea. Acepta un objeto de datos.
    // Datos a enviar en formato JSON

    const apiKey = 'tu_clave_api_aqui';

    const postData = {
        model: "text-davinci-003", // Asegúrate de usar un modelo válido, esto depende para que lo vamos a
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: "Hola, HunterXFanático!" }
        ]
    };
    //el try, intenta ejecutar las siquientes acciones, sin errores.
    try {
      // Realiza una solicitud HTTP POST(crea, acepta objeto de datos) esperando la respuesta antes de continuar (await)
      // La URL de await fetch, es el endpoint al que se hace la solicitud
      const response = await fetch(
        "url de chat openAI",
        {
          //await espera que termine de ejecutar la funcion
          //las asincronas siguen de largo, no esperan
          // sincronas, si esperan que se ejecute cada linea
          //las asincronas deben ser transformadas sincronas
          //para que se ejecute linea por linea.
          //fetch es asincrono, porque va a buscar a una fuente externa
          //json es un objeto (tipo de formato de dato)

          method: "POST", // especifica método HTTP para POST 
          headers: {
            "Content-Type": "application/json", // Indicamos que el contenido es JSON
            'Authorization': `Bearer ${apiKey}`
        },
          body: JSON.stringify(postData), // Convierte el objeto postData a una cadena JSON para enviarlo en el cuerpo de la solicitud
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

      const responseData = await response.json(); // Esperamos a que la respuesta se convierta a JSON
      console.log("Datos recibidos:", responseData); // Mostramos los datos recibidos
    } catch (error) {
        // Bloque catch que manejará cualquier error que ocurra en el bloque try
        // Imprime el error en la consola si algo sale mal durante la solicitud fetch o la conversión de datos
      console.error("Error al hacer fetch:", error); // Manejo de errores de la solicitud
    }

    console.log("La solicitud fetch ha sido completada");
  }

