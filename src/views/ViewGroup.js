import dataset from "../data/dataset.js";
import { timeClock } from "../lib/extraFunctions.js";

export const groupalChat = (props) => {
  const viewEl = document.createElement("div");
  const viewChatCharacter = `
<div class='view-character-chat'>
<div class='chat-box'>
    <div class='chat-nav-groupal'>
        <div class='character-gruop' id='character-group'>
        </div>
    </div>
    <div class='form-chats-group' id='form-chats-group'></div>
     <div class='chat-write'>
       <input class='chat-input' id='chat-input' type='text' placeholder='Escribe tu mensaje aquí...' />
       <button class='send-button' id='button-chat-ind'> > </button>
     </div>
</div>
</div>

  `;
  viewEl.innerHTML = viewChatCharacter;

  dataset.forEach((character) => {
    const viewGroup = `
           <div class='container-character-groupal'>
             <img src='${character.imageUrl}' alt='${character.name}' class='chat-img-groupal'>
             <div class='chat-id-text-group'>
               <p class='chat-name-groupal'>${character.name}</p>
               <p class='line-name-groupal'>En línea</p>
             </div>
           </div>
     `;
    //con inner estamos reemplazando
    viewEl.querySelector("#character-group").innerHTML =
      viewEl.querySelector("#character-group").innerHTML + viewGroup;
  });
  const clickSendMessage = viewEl.querySelector("#button-chat-ind");
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
  });
  return viewEl;
};

export default groupalChat;
