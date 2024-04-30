import dataset from "../data/dataset.js";
// Para poder renderizar las propiedades específicas del personaje q le hagamos click, aquí debemos acceder a la data
export const chatCharacter = (props) => {
  let characterObject = {};
  dataset.forEach(character => {
    if (character.id === props.id) {
      characterObject = character
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
      <div class='chat-msgs'>
      </div>
      <div class='chat-write'>
        <input class= 'chat-input' id='chat-input' type='text' placeholder='Escribe tu mensaje aquí...'/>
        <button class='send-button' id='send-button'> > </button>
      </div>
    </div> 
  </div>
     
  `;
  viewEl.innerHTML = viewChatCharacter;

  return viewEl;

};

export default chatCharacter;