import dataset from "../data/dataset.js";
import { timeClock } from "../lib/extraFunctions.js";
import { communicateWithOpenAI } from "../lib/openAIAPI.js";

export const groupalChat = () => { // Se removió parametro props porque no se estaba usando.

  const viewEl = document.createElement("div");
  const viewChatCharacter = `
<div class='view-character-chat'>
<div class='chat-box'>
    <div class='chat-nav-groupal'>
        <div class='character-gruop' id='character-group'>
        </div>
    </div>
    <div class='form-chats' id='form-chats-group'></div>
     <div class='chat-write'>
       <input class='chat-input' id='chat-input-group' type='text' placeholder='Escribe tu mensaje aquí...' />
       <button class='send-button' id='button-chat-group'> > </button>
     </div>
</div>
</div>

  `;
  viewEl.innerHTML = viewChatCharacter;

  dataset.forEach((character) => {
    const characterId = `
           <div class='container-character-groupal'>
             <img src='${character.imageUrl}' alt='${character.name}' class='chat-img-groupal'>
             <div class='chat-id-text-group'>
               <p class='chat-name-groupal'>${character.name}</p>
             </div>
           </div>
     `;
    //con inner estamos reemplazando
    viewEl.querySelector("#character-group").innerHTML =
      viewEl.querySelector("#character-group").innerHTML + characterId;
  });

  const clickSendMessageGruop = viewEl.querySelector("#button-chat-group");
  const formChatGroup = viewEl.querySelector("#form-chats-group");

  clickSendMessageGruop.addEventListener("click", function () {
    const inputTextGroup = document.getElementById("chat-input-group").value;
    const userChatGroup = `
    <div class='container-msg-r'>
      <p class='name-msg'>Tú</p>
      <div class='text-cloud-r'>
        <p id='text-chat' class='text-msg'>
        ${inputTextGroup}
        </p>
      </div>
      <span class='time'>${timeClock()} </span>
    </div>
    `;
    formChatGroup.innerHTML = formChatGroup.innerHTML + userChatGroup;
    formChatGroup.scrollTop = formChatGroup.scrollHeight;

    const chatAll = dataset.map((character)=> {
      const OpenAIObject = {
        message: inputTextGroup,
        nameCharacter: character.name
      }; 
      communicateWithOpenAI(OpenAIObject)
        .then((AIanswer) => {
          // Maneja los datos obtenidos de la respuesta
          AIanswer.choices[0].message.content;
          // console.log(chatAnswer)
        })
        //*DEBERÍAMOS MANEJAR UN CATCH EN ESTE SCOPE?
      return communicateWithOpenAI(OpenAIObject)
    })
    Promise.all(chatAll)
      .then((chatAll) => {
        chatAll.forEach((response, index) => {
          const systemChat = `
          <div class='container-msg-l'>
            <p class='name-msg'>${dataset[index].name}</p>
            <div class='text-cloud-l'>
              <p id='ai-text-chat' class='text-msg'>
              ${response.choices[0].message.content}
              </p>
            </div>
            <span class='time'>${timeClock()}</span>
          </div>
          `
          formChatGroup.innerHTML = formChatGroup.innerHTML + systemChat;
          formChatGroup.scrollTop = formChatGroup.scrollHeight;
          console.log(`${dataset[index].name}: ${response.choices[0].message.content}`)
        })
      })
      .catch((error) => { // PREGUNTAR DE TODOS MODOS POR LA PAUSA DE DEBUGGING QUE SE ACTIVÓ
        console.error(error)
        const errorAnswer = 'Lo siento, en este momento no estamos disponibles.'
        const systemChat = `
      <div class='container-msg-l'>
        <p class='name-msg'>Participantes del chat</p>
        <div class='text-cloud-l'>
          <p id='ai-text-chat' class='text-msg'>
          ${errorAnswer}
          </p>
        </div>
        <span class='time'>${timeClock()}</span>
      </div>
      `
        formChatGroup.innerHTML = formChatGroup.innerHTML + systemChat;
      })

    document.querySelector("#chat-input-group").value = "";
  });

  viewEl
    .querySelector("#chat-input-group")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        document.getElementById("button-chat-group").click();
      }
    });
 
  return viewEl;
};

export default groupalChat;
