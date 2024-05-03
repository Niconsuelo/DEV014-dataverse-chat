// parecido a una API, permite traer y llevar informacion de las vistas.
// si apreto un click en un boton, me llevara a otro lado, aqui se ejecuta esa funcion.

let ROUTES = {}; //variable que va a permitir ir a buscar la ruta que se solicita
let rootEl; //rootEl es donde se va a renderizar la vista root en html. Se reutilizara para por ejemplo limpiar la vista, etc

export const setRootEl = (el) => {  //'el' contiene el div
  rootEl = el;
};

export const setRoutes = (routes) => { //asigna a ROUTES el parametro de entrada 'routes'
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  //asigna rutas
  ROUTES = routes;
};

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  //crea un elemento URLsearchparams con los queryparams (string)
  const query = new URLSearchParams(queryString);
  // recorre queryparams
  // convert URLSearchParams to an object
  const newObject = {};
  for (const [key, value] of query) {
    //console.log(`${key}: ${value}`);
    newObject[key] = value;
  }
  return newObject;
};

export const renderView = (pathname, props = {}) => { //(Busca la vista segun el pathname, y luego lo agrega al elemento root(renderiza), si no encuentra agrega vista error)
  // clear the root element
  rootEl.innerHTML = "";
  // find the correct view in ROUTES for the pathname
  let foundView = ROUTES[pathname];
  // in case not found render the error view
  if (foundView === undefined) {
    foundView = ROUTES["/error"];
  }
  rootEl.appendChild(foundView(props));
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props
  // Datos que quieres asociar con el nuevo estado de la página
  const state = props;
  // Título para el estado, aunque actualmente no se utiliza en la mayoría de los navegadores
  const title = pathname;
  // La nueva URL que quieres mostrar en la barra de direcciones
  const url = pathname;
  //actualizar el historial de navegacion, cambia la barra url sin recarga.
  history.pushState(state, title, url);
  // Antes de que se ejecute la función y entregue la nueva vista, debemos DESFRAGMENTAR (separar los props de query params) el pathname, para que cuando se ejecute renderView en router y vaya a preguntarle a index.js si tal ruta/vista existe, la reconozca. Y por separado, se ejecuten los queryparams/props que son dinámicos
  
  const splitPathname = pathname.split('?');

  renderView(splitPathname[0], props);
};

export const onURLChange = (location) => { //(Transforma url en una vista con sus props correspondiente que son los queryparams)
  // parse (modificacion de algo para que funcione algo)
  // parse the location for the pathname and search params -->
  //cuales son los parametros de mi url y
  //quiero saber cual URL tengo que ir cuando se haga una accion en la vista o recargo vista

  //dividi el stirng de url
  const locationSplit = location.split("?");
  //obtuve la ruta
  const routeFound = locationSplit[0];
  //obtuve queryparams
  const paramsFound = locationSplit[1];
  // convert the search params to an object
  const objectParams = queryStringToObject(paramsFound);
  console.log(objectParams);
  //renderice la vista
  renderView(routeFound, objectParams);
};

/*
los props sirven para pasar informacion entre vistas en nuestro caso, 
si necesito que una vista sea kurapika tenemos un queryparams 
que identificara que es kurapika,con los props accederemos a la info que trae queryparams
para que se vea en la vista
*/
