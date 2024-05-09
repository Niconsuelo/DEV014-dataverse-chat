import dataset from "../data/dataset.js";
import { timeClock } from "../lib/extraFunctions.js";
import { communicateWithOpenAI } from "../lib/openAIAPI.js";
// Para poder renderizar las propiedades específicas del personaje q le hagamos click, aquí debemos acceder a la data
export const chatCharacter = (props) => {
  let characterObject = {};
  dataset.forEach((character) => {
    if (character.id === props.id) {
      characterObject = character;
    }
  });

  const viewEl = document.createElement("div");
  const viewChatCharacter = `
  <div class='view-character-chat'>
    <div class='chat-box'> 
      <div class='chat-id'> 
        <img src='${characterObject.imageUrl}' alt='${characterObject.name}' class='chat-img'>
        <div class='chat-id-text'>
          <p class='chat-name'>${characterObject.name}</p>
          <p class='chat-name-status'>En línea</p>
        </div>
      </div>
      <div class='form-chats' id='form-chats'>
      </div>
      <div class='chat-write'>
        <input class= 'chat-input' id='chat-input' type='text' placeholder='Escribe tu mensaje aquí...'/>
        <button class='send-button' id='send-button'> > </button>
      </div>
    </div> 
  </div>
     
  `;
  viewEl.innerHTML = viewChatCharacter;

  const clickSendMessage = viewEl.querySelector("#send-button");
  const formChat = viewEl.querySelector("#form-chats");
  clickSendMessage.addEventListener("click", function () {
    const inputText = document.getElementById("chat-input").value;
    const userChat = `
    <div class='container-msg-r'>
      <p class='name-msg'>Tú</p>
      <div class='text-cloud-r'>
        <p id='text-chat' class='text-msg'>
        ${inputText}
        </p>
      </div>
      <span class='time'>${timeClock()} </span>
    </div>
    `;
    formChat.innerHTML = formChat.innerHTML + userChat;
  

   

    const OpenAIObject = {
      message: inputText,
      nameCharacter: characterObject.name,
    };

    communicateWithOpenAI(OpenAIObject)
      .then((AIanswer) => {
        // Maneja los datos obtenidos de la respuesta
        console.log("Datos del usuario recibidos:", AIanswer);

        const systemChat = `
    <div class='container-msg-l'>
      <p class='name-msg'>${characterObject.name}</p>
      <div class='text-cloud-l'>
        <p id='text-chat' class='text-msg'>
          ${AIanswer.choices[0].message.content}
        </p>
      </div>
      <span class='time'>${timeClock()}</span>
    </div>
    `;

        formChat.innerHTML = formChat.innerHTML + systemChat;

        //crear un elemento div formChat.innethtml = ${response.choices[0].message.content}
      })
      .catch((error) => {
        // Maneja cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
        console.error(
          "Error al ejecutar funcion communicateWithOpenAI:",
          error
        );
      });

    //al hacer click o enter, se limpia el contenedor del input
    document.querySelector("#chat-input").value = "";
  });
  //para activar el enter cuando utilizamos el input de chat individual
  viewEl
    .querySelector("#chat-input")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.getElementById("send-button").click(); // Simula un clic en el botón
      }
    });

  return viewEl;
};

export default chatCharacter;
