//Aquí elaborar la lógica relativa a la IA.

import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages) => {
  console.log(messages);
  console.log(getApiKey());
  //almacenamiento de apikey
  const apiKey = getApiKey(); // getApiKey(); // debe ser enviada como header de autorizacion

  const url = "https://api.openai.com/v1/chat/completions";

  //utiliza post (acepta un objeto de datos)
  //post: enviar datos a traves de una peticion
  const postData = {
    //objeto que contiene la especificación del modelo y los mensajes que se van a enviar a la API de OpenAI.
    model: "gpt-3.5-turbo", // Asegúrate de usar un modelo válido, esto depende para que lo vamos a
    messages: [
      {
        role: "system",
        content: `You are ${messages.nameCharacter} of the anime hunter x, Just answer questions that are related to your character and his story.`
      },
      { role: "user", content: messages.message },
    ],
  };

  // Hacer la solicitud fetch a la API utilizando el método POST
  fetch(url, {
    method: "POST", // Especificar que se trata de una solicitud POST
    headers: {
      "Content-Type": "application/json",
      //"Bearer" se refiere a un tipo de token de acceso con el que un usuario puede acceder a un servidor o una API
      Authorization: `Bearer ${apiKey}`, // Especificar el tipo de contenido esperado por la API
    },
    //body, es el cuerpo de la solicitud. OpenAI acepta formatoJSON.
    body: JSON.stringify(postData), // Convertir los datos a enviar, en una cadena JSON
  })
    .then((response) => {
      // Primero, verifica si la respuesta es exitosa
      if (!response.ok) {
        // Lanza un error si la respuesta no es
        throw new Error("No se pudo obtener los datos: " + response.statusText);
      }
      return response.json(); // Parsea y retorna los datos JSON si es exitosa
    })
    .then((data) => {
      // Maneja los datos obtenidos de la respuesta
      console.log("Datos del usuario recibidos:", data);
      return data; // Puedes retornar los datos para encadenar más operaciones si es necesario
    })
    .catch((error) => {
      // Maneja cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
      console.error("Error durante la solicitud de datos del usuario:", error);
    });
};
