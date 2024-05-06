import dataset from "../data/dataset.js";
import { timeClock } from "../lib/functions.js";
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
          <p>En línea</p>
        </div>
      </div>

      <div class="form-chats" id="form-chats">
      </div>
      <div class='chat-write'>
        <input class= 'chat-input' id='chat-input' type='text' placeholder='Escribe tu mensaje...'/>
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

    const chat = `
    <div class="container-msg">
    <p class='chat-name-user'>HunterXFanático</p>
          <div class="text-cloud text-cloud-r">
            <p id="text-chat" class="text-msg">
            ${inputText}
            </p>
           
          </div>
          <span class="time">${timeClock()} </span>
    </div>
    `;
    //console.log(formChat);
    formChat.innerHTML = formChat.innerHTML + chat;

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
