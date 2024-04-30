import dataset from "../data/dataset.js";

const chatCharacter = (props) => {
  console.log("ACA", props)

  let objectNew = {};
dataset.forEach(character => {
  if(character.id === props.id){

objectNew = character;

  }
});

console.log(objectNew)

//  <img src=${character.imageUrl} alt=${character.name} class="card-img">
    
const viewEl = document.createElement("div");
const viewChatCharacter = `

<div class="view-chat-character">
    <div class="container-chat">
      <img class="img-character" src='${objectNew.imageUrl}' alt='${objectNew.name}' /> 
        <div class="text-chat">
          <h1> ${objectNew.name}  </h1>
          <p>En línea</p>
        </div>
       </div>
    </div>

    <div class="input-chat-individual">
        <input type="text" class="text-chat-individual" placeholder="Escribe tu pregunta...">
        <div class="button-chat-indivivual" id="button-addon4">
          <button class="button-chat-indivivual" type="button">Enviar</button>
        </div>
    </div>    
  </div>
</div>










  `;
viewEl.innerHTML = viewChatCharacter;

return viewEl;

};

export default chatCharacter;