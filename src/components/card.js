import { navigateTo } from "../router.js";
export const card = (character) => { 
  const li = `   
           <div class="card">
             <div class="imgs-container"> 
               <img src=${character.imageUrl} alt=${character.name} class="card-img">
               <img src="https://d100mj7v0l85u5.cloudfront.net/s3fs-public/2022-10/futuro-codigo-de-barras.png" alt="barcode" class="barcode-img">
             </div> 
             <div class="card-text"> 
               <h3 itemprop="name" class="card-tittle">${character.name}</h3>
               <div class="p-box">
                 <p1 itemprop="nenType"><span>Tipo de Nen: </span>${character.facts.nenType}</p1>
                 <p2 itemprop="ocupation"><span>Ocupación: </span>${character.facts.ocupation}</p2>
                 <p3 itemprop="abilities"><span>Habilidades: </span>${character.extraInfo.abilities}</p3>
               </div>  
             </div>
           </div>
       `;
 
   const clickCharacter = document.createElement("li");
   // el li de la card esta siendo reemplazado por la variable
   clickCharacter.id = character.id;
   clickCharacter.className = "card-li";
   clickCharacter.innerHTML = li;
 
   clickCharacter.addEventListener("click", function () {
 // historyAPI en JavaScript, que le permite administrar el historial de sesiones de un navegador.
 
 // Obtener el ID del personaje del atributo 'id' del elemento <li> haciendo referencia a 'this'
 const characterId = this.id;


  // Construir la ruta para la vista del chat del personaje utilizando el ID del personaje

  const chatPath = `/chat-character`+ '?id=' + characterId; //completar con el queryparams, (id), valor.

console.log(chatPath)
  // Llamar a navigateTo con la ruta construida y cualquier otra información necesaria
  navigateTo(chatPath, {
    id: characterId
  });


 });


 return clickCharacter;
 
};
