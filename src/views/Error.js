/* Crea una función encargada de generar el contenido de la vista. 
Esta función debe devolver un elemento DOM para que pueda ser utilizado por el enrutador.*/

const Error = () => {
  // HOME ES LA VISTA INICIAL-DEBE CONTENER TODO LO QUE SE VA A RENDERIZAR EN EL INICIO HTML, RENDERCARD DEBEN IR AQUI
  const viewEl = document.createElement("div");
  const errorPage = `
  <div class='error-page'>
    <img src='https://ih1.redbubble.net/image.5062941254.9931/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' alt='Potclean' class='error-img'>
      <h1 class='error-h1'>¡Error!</h1>
      <p>Para regresar a la página de inicio, haz click en el banner</p>
  </div>
  `
  viewEl.innerHTML = errorPage;
  return viewEl;
};

export default Error;
