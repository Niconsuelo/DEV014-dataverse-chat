const chatCharacter = () => {
    
const viewEl = document.createElement("div");
const viewChatCharacter = `
<div class="container-chat">
<div class="img-character"></div>
<div class="text-chat">
  <p>Killua Zoldyck</p>
  <p>En línea</p>
</div>
</div>
<div class="view-chat-character">
<div class="body-api-key">
  <div>
    <input class="input-chat-individual" />
  </div>
  <di>
  <button class="button-send-message"></button>
  </div>
</div>
</div>
  `;
viewEl.innerHTML = viewChatCharacter;

return viewEl;

};

export default chatCharacter;