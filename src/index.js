// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//SET(ASIGNACION)
// ACA SE ASIGNA LA RUTA Y SE LE AGREGA EL JS ASOCIADO A LA VISTA
// ademas se debe configurar

import { onURLChange, setRootEl, setRoutes } from "./router.js";
import Home from "./views/Home.js";
import Error from "./views/Error.js";
import ApiKeyView from "./views/ApiKeyView.js";
import chatCharacter from "./views/ViewChatCharacter.js";
import { navigateTo } from "./router.js";


//Ejemplo de definición de rutas:

const routes = {
  "/": Home, // pagina inicial donde tengo las cards
  "/error": Error,
  "/api-key": ApiKeyView, 
  "/chat-character": chatCharacter,

};
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

//se ejecuta la funcion setRoutes con el parametro routes(son las rutas de las vistas)
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);

  const pathnameRoute = window.location.pathname;
  const queryParamsRoute = window.location.search;

  onURLChange(pathnameRoute + queryParamsRoute);

const buttonApiKey = document.querySelector('#api-key-button');
buttonApiKey.addEventListener('click', function () {
 
navigateTo("/api-key");

});
});
