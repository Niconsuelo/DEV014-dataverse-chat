/* Crea una función encargada de generar el contenido de la vista. 
Esta función debe devolver un elemento DOM para que pueda ser utilizado por el enrutador.*/

import { cards } from "../components/Cards.js";
import { filterBar } from "../components/filterBar.js";
import { stats } from "../components/stats.js";
import dataset from "../data/dataset.js";

const Home = (props) => {
  console.log("AQUI ES HOME ", props);
  // HOME ES LA VISTA INICIAL-DEBE CONTENER TODO LO QUE SE VA A RENDERIZAR EN EL INICIO HTML, RENDERCARD DEBEN IR AQUI
  const viewEl = document.createElement("div");

  const controlBar = document.createElement("div");
  controlBar.innerHTML = filterBar();
  viewEl.appendChild(controlBar);

  const renderCards = cards(dataset);
  viewEl.appendChild(renderCards);
  //viewEl.textContent = `Welcome to the home page! ${props.bella}`;

  const newSection = document.createElement("section");
  newSection.id = 'stats-section';
  
  const renderStats = stats(dataset);
  newSection.innerHTML = renderStats;
  viewEl.appendChild(newSection);


const searchID = newSection.querySelector('#stats-section');

if(searchID){
    searchID.addEventListener('click', function(){
        console.log(searchID)

    });
}
//   const statButton = document.querySelector("");
//   const searchID = statButton.querySelector('#')
//   statButton.addEventListener("click", function () {

//     if (statButton) {
//         // Asegura un desplazamiento suave hasta la sección
//         statsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

 
  
  return viewEl;
};
  //});
//}
export default Home;

