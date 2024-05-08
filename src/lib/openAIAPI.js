import { getApiKey } from "./apiKey.js";

export const communicateWithOpenAI = (messages) => {
  const URL = "https://api.openai.com/v1/chat/completions";
  const API_KEY = getApiKey();
  const REQUEST = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are ${messages.nameCharacter} of the anime Hunter X Hunter. Just answer questions that are related to your character and its history`,
        },
        {
          role: "user",
          content: messages.message,
        },
      ],
    }),
  };

  const responseFetch = fetch(URL, REQUEST)
    .then((response) => {
      // Primero, verifica si la respuesta es exitosa
      if (!response.ok) {
        // Lanza un error si la respuesta no es
        throw new Error("No se pudo obtener los datos: " + response.statusText);
      }
      return response.json(); // Parsea y retorna los datos JSON si es exitosa
    })
    .catch((error) => {
      // Maneja cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
      console.error("Error durante la solicitud de datos del usuario:", error);
    });
  return responseFetch;
};
