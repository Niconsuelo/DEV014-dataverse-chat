// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
//SET(ASIGNACION)
// ACA SE ASIGNA LA RUTA Y SE LE AGREGA EL JS ASOCIADO A LA VISTA
// ademas se debe configurar

import { onURLChange, setRootEl, setRoutes } from "./router.js";
import Home from "./views/Home.js";
import Error from "./views/Error.js";
import { button } from "./components/button.js";


//Ejemplo de definición de rutas:

const routes = {
  "/": Home, // pagina inicial donde tengo las cards
  "/error": Error,
};
/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

//se ejecuta la funcion setRoutes con el parametro routes(son las rutas de las vistas)
setRoutes(routes);

const nav = document.getElementById('nav');
nav.appendChild(button('chat grupal'));



// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  setRootEl(root);

  const pathnameRoute = window.location.pathname;
  const queryParamsRoute = window.location.search;

  onURLChange(pathnameRoute + queryParamsRoute);
});
