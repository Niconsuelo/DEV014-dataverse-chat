/* 
//eslint-disable
// test/openAIApi.spec.js
import { communicateWithOpenAI } from '../src/utils/openAIAPI.js';

// describe('communicateWithOpenAI', () => {
//   test('communicateWithOpenAI', () => {
//     return communicateWithOpenAI().then(data => {
//       expect(data).toBe('example');
//     });
//   });
// });

// Configura Jest para mockear 'fetch'

global.fetch = jest.fn();
beforeEach(() => {
  fetch.mockClear();  // Limpia las instancias previas para asegurar tests aislados
});
describe('communicateWithOpenAI', () => {
  test('should return example data', () => {
    // Configura fetch para resolver con un objeto específico que imita una respuesta de API
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve('example'),  // Resuelve como 'example'
    });
    return communicateWithOpenAI().then(data => {
      expect(data).toBe('example');
    });
  });
  test('should handle failure', () => {
    // Configura fetch para rechazar o para resolver con un estado de error
    fetch.mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
      json: () => Promise.resolve({ message: 'Error' }),
    });
    return communicateWithOpenAI().then(data => {
      expect(data).toMatchObject({ error: 'API call failed' });
    }).catch(error => {
      expect(error.message).toContain('Not Found');
    });
  });
});

*/

import { communicateWithOpenAI } from "../src/lib/openAIAPI.js";

//limpiar después de cada llamada
afterAll(() => {
  //simulamos fetch con window la respuesta, xq jest no permite ejecutar funcion fetch directamente(instalar libreria)
  //mockclear: test empiece sin ningún historial previo de cómo la función mock ha sido usada en otras pruebas.
  window.fetch.mockClear();
  //terminada prueba, limpia nuevamente para ejecutar pruebas.
  delete window.fetch;
});

describe("communicateWithOpenAI", () => {
  const objectMessage = {
    message: "Dime tu nombre",
    characterName: "Gon Freecs",
  };

  //prueba para saber si obtengo un error al momento de consumir la promesa
  test("Debe intentar y fallar al llamar a Openai", () => {
    //jest.fn crea un mock de fetch y controlar las respuestas que debería retornar en tus pruebas.
    window.fetch = jest.fn(() =>
      //lo que va a responder el fetch
      Promise.resolve({
        ok: false,
        //({promesa resuelta que chat gpt entrega}) lo que voy a simular como respuesta
        //no es necesario escribir algo xq entregara error
        json: () => Promise.resolve({ data: "" }),
      })
    );

    return (
      communicateWithOpenAI(objectMessage)
        //.then()
        .catch((error) => {
          expect(error.message).toBe("No se pudo obtener los datos");
        })
    );
  });

  //prueba falla .json
  test("Debe intentar transformar la respuesta json y fallar al llamar a openai", () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.reject(new Error("Error al transformar JSON")),
      })
    );

    return communicateWithOpenAI(objectMessage).catch((error) => {
      expect(error.message).toBe(
        "Error durante la solicitud de datos:Error: Error al transformar JSON"
      );
    });
  });

  // pruebo que la respuesta entregada coincide con el mock de la respuesta real de chat gpt
  test("Debe obtener la informacion de Open ai correctamente", () => {
    window.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            id: "chatcmpl-9Oxp2tYWkFGAdbOuiJwDAYinfUp6C",
            object: "chat.completion",
            created: 1715736856,
            model: "gpt-3.5-turbo-0125",
            choices: [
              {
                index: 0,
                message: {
                  role: "assistant",
                  content: "Soy Gon Freecss.",
                },
                logprobs: null,
                finish_reason: "stop",
              },
            ],
            usage: {
              prompt_tokens: 44,
              completion_tokens: 7,
              total_tokens: 51,
            },
            system_fingerprint: null,
          }),
      })
    );

    return communicateWithOpenAI(objectMessage).then((data) => {
      expect(data.choices[0].message.content).toBe("Soy Gon Freecss.");
    });
  });
});
