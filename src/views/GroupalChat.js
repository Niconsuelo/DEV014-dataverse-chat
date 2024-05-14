import dataset from "../data/dataset.js";
import { timeClock } from "../lib/extraFunctions.js";
import { communicateWithOpenAI } from "../lib/openAIAPI.js";

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
               <p class='line-name-groupal'>En línea</p>
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

    document.querySelector("#chat-input-group").value = "";

let characterInfo = dataset.map(character =>{

  const arrayCharacter = {}
  //retornar un arreglo de promesas de los 24 personajes.
  const OpenAIObject = {
    message: inputTextGroup,
    nameCharacter: character.name,
  };


//consulta a openAI de forma independiente, 24 consultas.
  communicateWithOpenAI(OpenAIObject).then((AIanswer) => {
    // Maneja los datos obtenidos de la respuesta
      const chatAnswer = AIanswer.choices[0].message.content;
      console.log(chatAnswer)
      const systemChat = `
      <div class='container-msg-l'>
        <p class='name-msg'>${character.name}</p>
        <div class='text-cloud-l'>
          <p id='ai-text-chat' class='text-msg'>
          ${chatAnswer}
          </p>
        </div>
        <span class='time'>${timeClock()}</span>
      </div>
      `
      formChatGroup.innerHTML = formChatGroup.innerHTML + systemChat;
      // Scroll baja cada en cada ejecución del .then, es decir en cada emisión de respuesta de la IA
      formChatGroup.scrollTop = formChatGroup.scrollHeight;
    })
    .catch((error) => {
      // Maneja cualquier error que ocurra durante la solicitud o procesamiento de la respuesta
        const errorAnswer = "Lo lamento, en este momento no puedo responder."
        console.error("Error durante la solicitud de datos del usuario:", error);
        const systemChat = `
        <div class='container-msg-l'>
          <p class='name-msg'>${character.name}</p>
          <div class='text-cloud-l'>
            <p id='ai-text-chat' class='text-msg'>
            ${errorAnswer}
            </p>
          </div>
          <span class='time'>${timeClock()}</span>
        </div>
        `
        formChatGroup.innerHTML = formChatGroup.innerHTML + systemChat;
        formChatGroup.scrollTop = formChatGroup.scrollHeight;
      })
  
});


    let promise1 = fetchData("https://api.example.com/data1");
    let promise2 = fetchData("https://api.example.com/data2");
    let promise3 = fetchData("https://api.example.com/data3");

    //ejecuta todas las promesas, espera resultados, cuando estan listas, se puede acceder a ellas.
    Promise.all([promise1, promise2, promise3])
      .then((results) => {
        console.log("All data fetched successfully:", results);
        // Aquí puedes procesar los datos obtenidos de todas las promesas
      })
      .catch((error) => {
        console.error("Failed to fetch data:", error);
        // Manejo de errores, uno de los fetches falló
      });
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
