// parecido a una API, permite traer y llevar informacion de las vistas.
// si apreto un click en un boton, me llevara a otro lado, aqui se ejecuta esa funcion.


//variable que va a permitir ir a buscar la ruta que se solicita
let ROUTES = {};

//rootEl es donde se va a renderizar la vista root en html
//variable se reutilizara para por ejemplo limpiar la vista, etc
let rootEl;

//el contiene el div
export const setRootEl = (el) => {
  rootEl = el;
};
//asigna a ROUTES el parametro de entrada routes
export const setRoutes = (routes) => {
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
//busca la vista segun el pathname, y luego lo agrega al elemento root(renderiza), si no encuentra agrega vista error
export const renderView = (pathname, props = {}) => {
  // clear the root element
  rootEl.innerHTML = "";

  // find the correct view in ROUTES for the pathname
  let foundView = ROUTES[pathname];
  // in case not found render the error view
  if (foundView === undefined) {
    foundView = ROUTES["/error"];
  }
  rootEl.appendChild(foundView(props));

  //props sirve para pasar informacion entre vistas
  // render the correct view passing the value of props

  // add the view element to the DOM root element
};

export const navigateTo = (pathname, props = {}) => {
  // update window history with pushState
  // render the view with the pathname and props

  // Datos que quieres asociar con el nuevo estado de la página
  const state = props;

  // Título para el estado, aunque actualmente no se utiliza en la mayoría de los navegadores
  const title = pathname;

  // La nueva URL que quieres mostrar en la barra de direcciones

  //consultar a los queryparams 
  
  const url = pathname;
  
//cambia url, reemplaza url por pathname
  history.pushState(state, title, url);

//separar el queryparams del pathname
const splitPathname = pathname.split('?');
console.log(splitPathname)

//solo debe renderizar 
  renderView(splitPathname[0], props);


};
//transforma url en una vista con sus props correspondiente que son los queryparams
export const onURLChange = (location) => {
  // parse (modificacion de algo para que funcione algo)
  // parse the location for the pathname and search params -->
  //cuales son los parametros de mi url y
  //quiero saber cual URL tengo que ir cuando se haga una accion en la vista o recargo vista

  //dividi el stirng de url
  const locationSplit = location.split("?");
  console.log(locationSplit);
  //obtuve la ruta
  const routeFound = locationSplit[0];
  //obtuve queryparams
  const paramsFound = locationSplit[1];
  // convert the search params to an object
  const objectParams = queryStringToObject(paramsFound);

  console.log(objectParams);

  // render the view with the pathname and object
  //renderice la vista
  renderView(routeFound, objectParams);
  //
};

/*
los props sirven para pasar informacion entre vistas en nuestro caso, 
si necesito que una vista sea kurapika tenemos un queryparams 
que identificara que es kurapika,con los props accederemos a la info que trae queryparams
para que se vea en la vista
*/
