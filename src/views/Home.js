/* Crea una función encargada de generar el contenido de la vista. 
Esta función debe devolver un elemento DOM para que pueda ser utilizado por el enrutador.*/

import { cards } from "../components/Cards.js";
import { filterBar } from "../components/filterBar.js";
import { stats } from "../components/stats.js";
import dataset from "../data/dataset.js";
import { filterData, sortData } from "../lib/dataFunctions.js";

const Home = (props) => {
  console.log("AQUI ES HOME ", props);
  // HOME ES LA VISTA INICIAL-DEBE CONTENER TODO LO QUE SE VA A RENDERIZAR EN EL INICIO HTML, RENDERCARD DEBEN IR AQUI
  const viewEl = document.createElement("div");

  const controlBar = document.createElement("div");
  controlBar.innerHTML = filterBar();
  viewEl.appendChild(controlBar);

  const cardsContainer = document.createElement("div"); // *CREAR UN NUEVO CONTENEDOR EXCLUSIVO PARA EL UL
  const renderCards = cards(dataset);
  cardsContainer.appendChild(renderCards); // *AL CONTENEDOR CREADO, INSERTAMOS EL UL 
  viewEl.appendChild(cardsContainer); // *AL CONTENEDOR PADRE DE NUESTRA VISTA HOME.JS (SUCESOR DE ROOT) LE INSERTAMOS EL CONTENEDOR CON EL UL
  //viewEl.textContent = `Welcome to the home page! ${props.bella}`;

  const selectfilterOcupation = viewEl.querySelector("#filter-ocupation"); // No sirve la referencia a document, hay que cambiarla a viewEl que es contenedor padre
  const nenSelect = viewEl.querySelector("#select-filter");
  const sortSelect = viewEl.querySelector("#sort-select");

  selectfilterOcupation.addEventListener("change", function (event) {
    let result = [];
    const optionFilter = event.target.value;
    result = filterData(dataset, "ocupation", optionFilter);
    const nenTypeSelect = nenSelect.value;
    if (nenTypeSelect !== "") {
      result = filterData(result, "nenType", nenTypeSelect);
    }
    const sortSelection = sortSelect.value;
    if (sortSelection !== "") {
      result = sortData(result, "name", sortSelection);
    }
    // const root = document.querySelector("#root");  *NO LA NECESITAMOS PORQ YA TENEMOS LA REFERENCIA AL CONTENEDOR PADRE DE HOME
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cards(result));
  });
  
  const newSection = document.createElement("section");
  const renderStats = stats(dataset);
  newSection.innerHTML = renderStats;
  viewEl.appendChild(newSection);


  
  return viewEl;
};

export default Home;
