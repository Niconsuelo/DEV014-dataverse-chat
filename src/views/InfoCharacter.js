import dataset from "../data/dataset.js";

export const infoCharacter = (props) => {
    let characterObject = {};
    dataset.forEach((character) => {
      if (character.id === props.id) {      
        characterObject = character;
      }
    });

    const viewEl = document.createElement("div");
    viewEl.innerHTML = `
         <div class='info-background'>
             <div class='img-background-info'>
                <div class='container-info-chat'>
                   
                    <div class='img-character-info'>
                    </div>

                    <div class='character-info'>
                         <p class='text-character-info'>
                        "Su talento y habilidad lo han convertido en alguien realmente confiado de sí mismo. Únicamente mira por sus intereses, haciendo así lo que le place cuando y cuanto quiere, sin seguir ninguna norma o lazo emocional. Pareciera que su gran motivación es la de derrotar oponentes elegidos según sus propios criterios, llegando al punto de esperar pacientemente por obtener un rival que considere digno (Gon, Killua, Kalluto, etc), que supere, o podrá superar en un futuro, sus habilidades. Asimismo, Hisoka se une temporalmente a la Brigada Fantasma, para tener la oportunidad de luchar contra el líder del grupo, Chrollo Lucilfer".
                        </p>
                    </div>

                </div>

                <button class='element-chat-inv' id='button-element-chat-ind'>
                    <p class='text-button-info'>¡Chatea conmigo! </p>
                </button>


             </div>
         </div>

    `;
    

    const clickImg = viewEl.querySelector("#button-element-chat-ind");
  clickImg.addEventListener("click", () => {
  //Crear variable para el identificador. Necesita tener un identificador (en este caso, el id de cada personaje)
    const characterId = character.id 
    // - Crear una nueva URL que incluya la ruta de la vista y el identificador respectivo (query param + identificador {key+value} === ?id=character.id). "Llevar" el identificador a la url
    const chatPath = '/chat-character' + '?id=' + characterId;
    console.log(chatPath)
    // - Actualizar el historial de navegación en la URL (con history.pushState({}, '', newUrl)) para sumar la nueva URL sin borrar el historial
    // - onURLchange
    navigateTo(chatPath, {id:characterId});

  });    


    return viewEl
}
  
export default infoCharacter;