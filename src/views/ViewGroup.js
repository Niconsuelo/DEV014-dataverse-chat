import dataset from "../data/dataset.js";
import {timeClock } from "../lib/extraFunctions.js";


export const groupalChat = (props) => {
   
    dataset.forEach((character) => {
      if (character === props) {      
        dataset(character);
      }
    });
    console.log(dataset)
   
    const viewEl = document.createElement("div");
    const viewChatCharacter = `
<div class='view-character-chat'>
<div class='chat-box'>
    <div class='chat-nav-groupal'>

        <div class='character-gruop'>

            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/Jv3psNR/58596-Hisoka-Hunter-Hunter-Hisoka-Hunter-Hunter-HD.jpg' alt='${dataset.name}' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Hisoka</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/nmyhYmr/wp7109874.jpg' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Leorio</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/YpwHbQn/06yuutyo-bank-2.webp' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Wing</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/1qHFbLs/image.png' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Netero</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/smww8x1/chrollo.jpg' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Chrollo</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/vhqH5HD/image.png' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Feitan</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                <img src='https://i.ibb.co/kxVK63n/image.png' class='chat-img-groupal'>
                <div class='chat-id-text-group'>
                <p class='chat-name-groupal'>Hanzo</p>
                <p class='line-name-groupal'>En línea</p>
                </div>
             </div>
             <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/K26sPT9/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Illumi</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/6Dynk4V/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Kite</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/CMKsmBc/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Silva</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
                 <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/jJhtwzP/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Neferpitou</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/c2VRrW9/gon.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Gon</p>
                 <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/CtHqhLQ/Kurapika.jpg' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Kurapika</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/bbm5yfw/279aa6ae9fe65c86c5bd04c9443b098c.jpg' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Killua</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/HpHxs39/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Biscuit</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/Zxq3BTB/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Meruem</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/hCsKYVh/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Ging</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/jDnkxny/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Youpi</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/6D5k5hg/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Pakunoda</p>
                 <p class='line-name-groupal'>En línea</p>
                </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/1KmS37s/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Morel</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/X3MXpF9/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Shizuku</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/2gFN4MT/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Shalnark</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/rvvp1TP/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Machi</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
            </div>
            <div class='container-character-groupal'>
                 <img src='https://i.ibb.co/xM8ZrM2/image.png' class='chat-img-groupal'>
                 <div class='chat-id-text-group'>
                 <p class='chat-name-groupal'>Zeno</p>
                 <p class='line-name-groupal'>En línea</p>
                 </div>
             </div>
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
    return viewEl

    };

export default groupalChat;